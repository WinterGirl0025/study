const user = {
    id: "@id()", //随机id
    username: "@name()",
    date: "@date()",
    avatar: "@image('200x200','red','#fff','avatar')",
    description: "@paragraph()",
    ip: "@ip()",
}

const message = {
    // 随机生成1-10条数据
    "array|1-10": [{
        description: "@cparagraph",
        email: "@email"
    }]
}

const userInfo = { user, message }

export default userInfo