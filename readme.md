
# Post-Generator 

A professional Node.js automation tool designed to transform SVG templates into high-quality branded PNGs. This project allows you to generate Social Posts, Articles, and Newsletters by simply swapping templates and editing a single configuration file.



## 📁 Project Structure

```text
POST-GENERATOR/
├── Logos/              # Store brand/product PNG logos here
│   ├── lmnas.png
│   └── Lumi-logo.png
├── Templates/          # Store your master SVG designs here
│   ├── Article-Template.svg
│   ├── Post-Template.svg
│   └── Newsletter-Template.svg
├── Output/             # All generated PNGs will be saved here
├── app.js              # Core Logic (The engine - do not edit)
├── config.js           # Input File (Your dashboard - edit this)
├── package.json        # Project dependencies
└── README.md           # This file

```

----------

## 🏗️ Prerequisites

1.  **Node.js**: Version 18.x or higher.
    
2.  **System Font (Inter)**: The templates are configured to use the **Inter** font family.
    
    -   **Action**: Download and install the font family from [Google Fonts](https://fonts.google.com/specimen/Inter) onto your computer.
        
    -   **Note**: Restart your terminal or VS Code after installation so the system recognizes the new font.
        

----------

## 🛠️ Installation

1.  Clone the repository to your local machine.
    
2.  Install the required image processing and DOM libraries by running:
    
    Bash
    
    ```
    npm install sharp jsdom
    
    ```
    

----------

## ⚙️ Configuration & Usage

You do **not** need to modify `app.js`. All changes are managed through `config.js`.

### 1. Configure your Content

Open `config.js` and update the following fields:

-   **`template`**: Set the path to the SVG you want to use (e.g.,  `./Templates/Newsletter-Template.svg`).
    
-   **`inputLogo`**: Set the path to your brand logo (e.g.,  `./Logos/Lumi-logo.png`).
    
-   **`content`**: Fill in the text values for the IDs that exist in your chosen template.
    

### 2. Run the Generator

Open your terminal in the project root and run:

Bash

```
node app.js

```

### 3. Retrieve your Image

The script will process the SVG and save the final result in the `/Output` folder as .png , defined in your `config.js`.

----------

## 🆔 Template ID Reference

The script maps keys in `config.js` to specific `id` attributes within your SVG files.

**Template Type**

**Key IDs to use in config.js**

**Post / Article**

`title-1`, `title-2`, `title-3`, `subtitle-1`, `subtitle-highlight`, `slogan-main`, `product-name`,`agent-logo` (ID for the logo image tag), `product-description`

**Newsletter**

`Main-title`, `Month`, `pill content-1`, `pill content-2`, `pill content-3`



----------

## ⚠️ Troubleshooting

-   **Wrong Font Rendering**: If the output PNG displays a generic font (like Arial), ensure "Inter" is installed correctly on your Operating System.
    
-   **Logo Not Visible**: Ensure the SVG template contains an `<image id="agent-logo" ... />` tag. The script specifically looks for the `agent-logo` ID to inject the PNG.
    
-   **Path Errors**: Always ensure your paths in `config.js` start with `./` to indicate the current directory (e.g.,  `./Templates/Post-Template.svg`).