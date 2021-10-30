const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const graphQlSchema = require("./src/schema")
const graphQlResolvers = require("./src/resolvers")
const mongoose = require("mongoose")
var cors = require('cors')

const app = express()

app.use(cors())

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
)

const uri = process.env.MONGO_CONNSTRING
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
  .connect(uri, options)
  .then(() => app.listen(process.env.PORT, console.log(`Server is listening on ${process.env.PORT}`)))
  .catch(error => {
    throw error
  })