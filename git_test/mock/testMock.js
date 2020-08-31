const Mock = require('mockjs')
let id = Mock.mock({
    id:"@id()",
    username:"@name()",
    date:"@date()",
    avatar:"@image('200x200','red','#fff','avatar')",
    description:"@paragraph()",
    ip:"@ip()",
    email:"@email"
})
console.log(id);