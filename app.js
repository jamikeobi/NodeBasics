const readline = require('readline');
const fs = require('fs');
const http = require('http');
const url = require('url');
const events = require('events');

//USER DEFINED MODULES
const replaceHtml = require('./Module/replacehtml');
const user = require('./Module/user');
const { error, log } = require('console');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Please enter your name: ", (name) => {
//     console.log("You entered: " + name);
//     rl.close();
    
// })


// rl.on('close', () => {
//     console.log("INterface closed");
//     process.exit(1);
// })


// 2nd Lecture. Reading and writing to files Synchronous

// let textIn = fs.readFileSync('./Files/input.txt', 'utf-8');
// console.log(textIn);

// let content = Data read from input.txt: ${textIn}. \nDate created ${new Date()}
// fs.writeFileSync('./Files/output.txt', content)


//Writing and reading files asynchronously

// fs.readFile('./Files/start.txt', 'utf-8', (error1,data1) => {
//     console.log(data1);=
//     fs.readFile(`./Files/${data1}.txt`,'utf-8',(error2,data2) =>{
//       console.log(data2);
//       fs.readFile('./Files/append.txt', 'utf-8',(error3,data3)=>{
//         console.log(data3);
//         fs.writeFile('./Files/output.txt', `${data2}\n\n${data3}\n\nDate created ${new Date()}`, ()=>{
//           console.log('File written successfully');
//         });
//       })
//       })
//   })
//   console.log('Reading File...')





// Creating a simple web server
const html = fs.readFileSync('./Template/index.html', 'utf-8');
const products = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'));
const productListHtml = fs.readFileSync('./Template/productList.html', 'utf-8');
const productDetailsHtml = fs.readFileSync('./Template/productDetails.html', 'utf-8');

// let productListHtmlArray = products.map((prod) => {
//     let output = productListHtml.replace('{{%IMAGES%}}', prod.productImage);
//     output = output.replace('{{%NAME%}}', prod.name);
//     output = output.replace('{{%MODELNAME%}}', prod.modeName);
//     output = output.replace('{{%MODELNO%}}', prod.modelNumber);
//     output = output.replace('{{%SIZES%}}', prod.size);
//     output = output.replace('{{%CAMERA%}}', prod.camera);
//     output = output.replace('{{%PRICE%}}', prod.price);
//     output = output.replace('{{%COLOR%}}', prod.color);
//     output = output.replace('{{%ID%}}', prod.id);

//     // Replace the id placeholder in the anchor tag
//     output = output.replace('href="/products?id={{%ID%}}"', `href="/products?id=${prod.id}"`);

    
//     return output;
// })

// Using reuseable functions

// function replaceHtml(template, product){
//     let output = template.replace('{{%IMAGES%}}', product.productImage);
//     output = output.replace('{{%NAME%}}', product.name);
//     output = output.replace('{{%MODELNAME%}}', product.modeName);
//     output = output.replace('{{%MODELNO%}}', product.modelNumber);
//     output = output.replace('{{%SIZES%}}', product.size);
//     output = output.replace('{{%CAMERA%}}', product.camera);
//     output = output.replace('{{%PRICE%}}', product.price);
//     output = output.replace('{{%COLOR%}}', product.color);
//     output = output.replace('{{%SIZE%}}', product.size);
//     output = output.replace('{{%ROM%}}', product.ROM);
//     output = output.replace('{{%DESC%}}', product.Description);
//     output = output.replace('{{%ID%}}', product.id);

//     // Replace the id placeholder in the anchor tag
//     output = output.replace('href="/products?id={{%ID%}}"', `href="/products?id=${product.id}"`);

    
//     return output;
// }
// Step 1: Create a Server

// const server = http.createServer((request, response) => {
//     let {query, pathname: path} = url.parse(request.url, true);
//     // console.log(x);
    
//     // let path = request.url;
    
//     if(path === '/' || path.toLocaleLowerCase() === '/home'){
//         response.writeHead(200, {'Content-Type' : 'text/html', 'my-header' : 'Hello world'});
//         response.end(html.replace('{{%CONTENT%}}', productListHtml));
//     } else if(path.toLocaleLowerCase() === '/about'){
//         response.writeHead(200, {'Content-Type' : 'text/html', 'my-header' : 'Hello world'});
//         response.end(html.replace('{{%CONTENT%}}', 'You are in the About page'));
//     } else if(path.toLocaleLowerCase() === '/contact'){
//         response.writeHead(200, {'Content-Type' : 'text/html', 'my-header' : 'Hello world'});
//         response.end(html.replace('{{%CONTENT%}}', 'You are in the Contact page'));
//     } else if(path.toLocaleLowerCase() === '/products'){
//         if(!query.id){
//            let productHtmlArray = products.map((prod) => {
//               return replaceHtml(productListHtml, prod);
//             })
//             let productResponseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(''));
//             response.writeHead(200, {'Content-Type' : 'text/html', 'my-header' :''});
//             response.end(productResponseHtml);
//             // console.log(productListHtmlArray.join(','));    
//         } else{
//             let prod = products[query.id];
//             let productDetailsHtmlResponse = replaceHtml(productDetailsHtml, prod);
//             response.end(html.replace('{{%CONTENT%}}', productDetailsHtmlResponse))
//         }
       
        
//     }
//     else {
//         response.writeHead(404, {'Content-Type' : 'text/html', 'my-header' : 'Hello world'});
//         response.end(html.replace('{{%CONTENT%}}', 'Error 404: Page not found'));
//     }
//     // response.end(html);
//     // request.url
//     // console.log('A new request received');
//     // console.log(response);
    
    
// });

//Server inherits the handler from EventEmitter class
const server = http.createServer();

// server.on('request', (request, response) => {
//     let {query, pathname: path} = url.parse(request.url, true);
//     // console.log(x);
    
//     // let path = request.url;
    
//     if(path === '/' || path.toLocaleLowerCase() === '/home'){
//         response.writeHead(200, {'Content-Type' : 'text/html', 'my-header' : 'Hello world'});
//         response.end(html.replace('{{%CONTENT%}}', productListHtml));
//     } else if(path.toLocaleLowerCase() === '/about'){
//         response.writeHead(200, {'Content-Type' : 'text/html', 'my-header' : 'Hello world'});
//         response.end(html.replace('{{%CONTENT%}}', 'You are in the About page'));
//     } else if(path.toLocaleLowerCase() === '/contact'){
//         response.writeHead(200, {'Content-Type' : 'text/html', 'my-header' : 'Hello world'});
//         response.end(html.replace('{{%CONTENT%}}', 'You are in the Contact page'));
//     } else if(path.toLocaleLowerCase() === '/products'){
//         if(!query.id){
//            let productHtmlArray = products.map((prod) => {
//               return replaceHtml(productListHtml, prod);
//             })
//             let productResponseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(''));
//             response.writeHead(200, {'Content-Type' : 'text/html', 'my-header' :''});
//             response.end(productResponseHtml);
//             // console.log(productListHtmlArray.join(','));    
//         } else{
//             let prod = products[query.id];
//             let productDetailsHtmlResponse = replaceHtml(productDetailsHtml, prod);
//             response.end(html.replace('{{%CONTENT%}}', productDetailsHtmlResponse))
//         }
       
        
//     }
//     else {
//         response.writeHead(404, {'Content-Type' : 'text/html', 'my-header' : 'Hello world'});
//         response.end(html.replace('{{%CONTENT%}}', 'Error 404: Page not found'));
//     }
//     // response.end(html);
//     // request.url
//     // console.log('A new request received');
//     // console.log(response);
    
    
// })
// Step 2: Start the Server


server.on('request', (request, response) => {
    let rs = fs.createReadStream('./Files/largeFile.txt');

    // rs.on('data', (chunk)=> {
    //     response.write(chunk);
    //     response.end();
    // });

    rs.pipe(response)

    rs.on('error', (error) => {
        response.end(error.message)
    })

    let ws = fs.createWriteStream('./Files/largeFile.txt');

    ws.write('This is the first line\n');
    ws.write('This is the Second line\n');
    ws.write('This is the Last line\n');

    ws.end('I am done writing to the stream\n');

    ws.on('finish', ()=> {
        console.log('i AM DONE WRITING TO THIS STREAM');
    });

    ws.on('error', (error)=> {
        console.log('An error occured while writing to stream');
        
    })
});


server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started on port 8000');
});

// Read on DNS, SSL and TLS, How to show css and make script task work, Query string in angular, alias, stream 


//Lecture on Emitting and handling custom events

let myEmitter = new user();


myEmitter.on('userCreate', (id, name) => {
    console.log(`A new user ${name} with ID ${id} is  created`);
})

myEmitter.on('userCreate', (id, name) => {
    console.log(`A new user ${name} with ID ${id} is added to the database`);
})

myEmitter.emit('userCreate', 101, 'Jamike') //Emitting a named event
