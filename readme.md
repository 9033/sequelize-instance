# sequelize-instance
## description
sequelize instances viewer or toJSON
## install
`npm i git+https://github.com/9033/sequelize-instance.git`
## using
```js
const sequelizeInstance = require("sequelize-instance")
const human = await Human.findOne()
sequelizeInstance.view(human)
const humen = await Human.findAll()
sequelizeInstance.view(humen)
const humenJSON = sequelizeInstance.toJSON(humen)
```
