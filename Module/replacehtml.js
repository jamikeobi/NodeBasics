module.exports =  function replaceHtml(template, product){
    let output = template.replace('{{%IMAGES%}}', product.productImage);
    output = output.replace('{{%NAME%}}', product.name);
    output = output.replace('{{%MODELNAME%}}', product.modeName);
    output = output.replace('{{%MODELNO%}}', product.modelNumber);
    output = output.replace('{{%SIZES%}}', product.size);
    output = output.replace('{{%CAMERA%}}', product.camera);
    output = output.replace('{{%PRICE%}}', product.price);
    output = output.replace('{{%COLOR%}}', product.color);
    output = output.replace('{{%SIZE%}}', product.size);
    output = output.replace('{{%ROM%}}', product.ROM);
    output = output.replace('{{%DESC%}}', product.Description);
    output = output.replace('{{%ID%}}', product.id);

    // Replace the id placeholder in the anchor tag
    output = output.replace('href="/products?id={{%ID%}}"', `href="/products?id=${product.id}"`);

    
    return output;
}