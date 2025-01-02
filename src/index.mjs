import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.status(201).send({msg:"Hello World"});
});

const mockUsers =[
    {id: 1, username : "anson", displayName: "Anson"},
    {id: 2, username : "jack", displayName: "Jack"},
    {id: 3, username : "bob", displayName: "Bob"},
    {id: 4, username : "max", displayName: "Max"},
]

app.get("/api/users", (request, response) => {
    console.log(request.query)
    response.send(mockUsers);
})

app.get("/api/products", (request, response)=>{
    response.send([ { id: 123, name: 'chicken', price: 12.99}]);
});
app.listen(PORT, ()=> {
    console.log(`Running on Port ${PORT}`)
});