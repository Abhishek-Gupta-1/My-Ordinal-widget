import {createCanvas} from "canvas";

const infoMap = new Map([
    ['Organization', [105.2,825,300]],
    ['Email', [105.2,873,300]],
    ['Website', [105.2,921,300]],
    ['Phone', [460,825,300]],
    ['Location', [460,873,300]],
    ['AreaOfInterest', [460,921,300]]
]);

async function writeShortNameDesignation(ctx, text) {

    // Text specifications
    const textX = 52;
    const textY = 332;
    const textWidth = 158;
    const textColor = '#FFFFFF';
    const fontSize = 24;
    const fontWeight = '400';
    const lineHeight = 29;
    const textAlign = 'left';

    // Apply drop shadow effect
    ctx.shadowColor = "#000000";
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 10;

    // Set text properties
    ctx.font = `${fontWeight} ${fontSize}px Arial, sans-serif`;
    ctx.fillStyle = textColor;
    ctx.textBaseline = 'top';
    ctx.textAlign = textAlign;

    // Split text into multiple lines if needed
    const words = text.split(' ');
    let lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        const testLine = `${currentLine} ${words[i]}`;
        const testWidth = ctx.measureText(testLine).width;

        if (testWidth <= textWidth) {
            currentLine = testLine;
        } else {
            lines.push(currentLine);
            currentLine = words[i];
        }
    }
    lines.push(currentLine);

    // Draw each line of text
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const textXPosition = textX;
        const textYPosition = textY + i * lineHeight;

        ctx.fillText(line, textXPosition, textYPosition);
    }

    // Remove shadow settings for other drawings
    ctx.shadowColor = "transparent";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
}

async function setImageOnTemplate(ctx, overlayFile) {
    const imageX = 374;
    const imageY = 188;
    const imageWidth = 324;
    const imageHeight = 324;
    const cornerRadius = 35.64;

    if (overlayFile) {
        const overlayImage = document.createElement('img');
        overlayImage.src = overlayFile;
        await overlayImage.decode();
    }

    // Create a clipping path
    ctx.beginPath();
    ctx.moveTo(imageX + cornerRadius, imageY);
    ctx.lineTo(imageX + imageWidth - cornerRadius, imageY);
    ctx.quadraticCurveTo(imageX + imageWidth, imageY, imageX + imageWidth, imageY + cornerRadius);
    ctx.lineTo(imageX + imageWidth, imageY + imageHeight - cornerRadius);
    ctx.quadraticCurveTo(imageX + imageWidth, imageY + imageHeight, imageX + imageWidth - cornerRadius, imageY + imageHeight);
    ctx.lineTo(imageX + cornerRadius, imageY + imageHeight);
    ctx.quadraticCurveTo(imageX, imageY + imageHeight, imageX, imageY + imageHeight - cornerRadius);
    ctx.lineTo(imageX, imageY + cornerRadius);
    ctx.quadraticCurveTo(imageX, imageY, imageX + cornerRadius, imageY);
    ctx.closePath();

    ctx.clip();

    // Apply drop shadow effect
    ctx.shadowColor = "#000000";
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 10;

    ctx.drawImage(overlayImage, imageX, imageY, imageWidth, imageHeight);

    // Remove shadow settings for other drawings
    ctx.shadowColor = "transparent";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
}

function detailWriter(field, ctx, lineHeight, textSpecifications) {

    const textX = textSpecifications[0];
    const textY = textSpecifications[1];
    const textWidth = textSpecifications[2];

    const words = field.split(' ');
    let lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        const testLine = `${currentLine} ${words[i]}`;
        const testWidth = ctx.measureText(testLine).width;

        if (testWidth <= textWidth) {
            currentLine = testLine;
        } else {
            lines.push(currentLine);
            currentLine = words[i];
        }
    }
    lines.push(currentLine);

    // Draw each line of field
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const textXPosition = textX;
        const textYPosition = textY + i * lineHeight;

        ctx.fillText(line, textXPosition, textYPosition);
    }
}

export async function  setDetails(designation,aboutText,overlayFile , templateFile, organizationName, emailId, webUrl, phone, location, areaOfInterest){
    const canvasWidth = 736;
    const canvasHeight = 1104;

    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');

    if (templateFile) {
        const templateImage = document.createElement('img');
        templateImage.src = templateFile;
        await templateImage.decode();
    }

    ctx.drawImage(templateImage, 0, 0);

    setShortName(ctx, 'Shubh Gautam');
    writeShortNameDesignation(ctx, designation);

    const fontFamily = 'Barlow';
    const fontSize = 22;
    const fontWeight = '500';
    const lineHeight = 26;
    const textAlign = 'left';
    const textColor = '#112D44';

    // Set text properties
    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}, Arial, sans-serif`;
    ctx.fillStyle = textColor;
    ctx.textBaseline = 'top';
    ctx.textAlign = textAlign;

    setImageOnTemplate(ctx, overlayFile);
    writeAboutMe(aboutText, ctx);
    detailWriter(emailId, ctx, lineHeight,infoMap.get('Email'));
    detailWriter(organizationName, ctx, lineHeight,infoMap.get('Organization'));
    detailWriter(webUrl, ctx, lineHeight, infoMap.get('Website'));
    detailWriter(phone, ctx, lineHeight, infoMap.get('Phone'));
    detailWriter(location, ctx, lineHeight, infoMap.get('Location'));
    detailWriter(areaOfInterest, ctx, lineHeight, infoMap.get('AreaOfInterest'));
    // Save the output image as a PNG file
    return ctx;
}

async function writeAboutMe(aboutText, ctx) {
    const textX = 52;
    const textY = 612;
    const textWidth = 634;
    const lineHeight = 34;

    const words = aboutText.split(' ');
    let lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        const testLine = `${currentLine} ${words[i]}`;
        const testWidth = ctx.measureText(testLine).width;

        if (testWidth <= textWidth) {
            currentLine = testLine;
        } else {
            lines.push(currentLine);
            currentLine = words[i];
        }
    }
    lines.push(currentLine);

    // Calculate total text height
    const totalTextHeight = lines.length * lineHeight;

    // Draw each line of about text
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const textXPosition = textX;
        const textYPosition = textY + i * lineHeight;

        ctx.fillText(line, textXPosition, textYPosition);
    }

}

async function setShortName(ctx, shortName) {
    const textX = 46;
    const textY = 261;
    const textWidth = 294;
    const textHeight = 70;
    const textColor = '#FFFFFF';
    const fontSize = 42;

    // Apply drop shadow effect
    ctx.shadowColor = "#000000";
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 10;

    // Set text properties
    ctx.font = `${fontSize}px Arial, sans-serif`;
    ctx.fillStyle = textColor;
    ctx.textBaseline = 'top';

    // Split short name into multiple lines if needed
    const words = shortName.split(' ');
    let lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        const testLine = `${currentLine} ${words[i]}`;
        const testWidth = ctx.measureText(testLine).width;

        if (testWidth <= textWidth) {
            currentLine = testLine;
        } else {
            lines.push(currentLine);
            currentLine = words[i];
        }
    }
    lines.push(currentLine);

    // Calculate total text height
    const totalTextHeight = lines.length * fontSize;

    // Center text vertically
    const startY = textY + (textHeight - totalTextHeight) / 2;

    // Draw each line of text
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const textXPosition = textX + (textWidth - ctx.measureText(line).width) / 2;
        const textYPosition = startY + i * fontSize;

        ctx.fillText(line, textXPosition, textYPosition);
    }

    // Remove shadow settings for other drawings
    ctx.shadowColor = "transparent";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
}