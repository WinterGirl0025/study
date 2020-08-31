import userInfo from './model/info.js'
import Mock from 'mockjs'

export default {
    'post|/userInfo/userinfo': option => {
        // option打印
        console.log(option)
        var data = JSON.parse(option.body);
        // 数据打印
        console.log(data.username)
        return {
            status: 200,
            message: 'success',
            data: Mock.mock(userInfo.user)
        };
    },
    'get|/userInfo/usermessage': () => {
        return {
            status: 200,
            message: 'success',
            data: Mock.mock(userInfo.message)
        };
    },
}
