const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const sharp = require('sharp'); // for rendering img
const config = require('./config'); // Take inputs from Config file

async function generateSingleImage() {
    try {
        const svgPath = path.join(__dirname, config.template);
        
        if (!fs.existsSync(svgPath)) {
            console.error(`Error: Template "${config.template}" not found in folder.`);
            return;
        }

        //  Read SVG and Init DOM
        const svgString = fs.readFileSync(svgPath, 'utf8');
        const dom = new JSDOM(svgString, { contentType: "image/svg+xml" });
        const document = dom.window.document;

        // Inject product Logo
        const logoPath = path.join(__dirname, config.inputLogo);
        if (fs.existsSync(logoPath)) {
            const logoBase64 = fs.readFileSync(logoPath).toString('base64');
            const logoElement = document.getElementById('agent-logo');
            if (logoElement) {
                logoElement.setAttribute('href', `data:image/png;base64,${logoBase64}`);
            }
        }

        //  Replace Text Content
        Object.keys(config.content).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = config.content[key];
            }
        });

        //  Render to PNG
        const finalSvg = dom.serialize();
        await sharp(Buffer.from(finalSvg), { density: 500 }) // increse density for better img quality (500 is enough)
            .png()
            .toFile(path.join(__dirname, config.outputName));
        
        console.log(`✅ Success! Created: ${config.outputName} using ${config.template}`);

    } catch (err) {
        console.error("An unexpected error occurred:", err);
    }
}

generateSingleImage();