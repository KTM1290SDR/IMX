// app/io/middleware/filter.js
// 这个中间件的作用是将接收到的数据再发送给客户端
module.exports = app => {
    return function* (next) {
        this.socket.emit('res', '接受数据包!');
        console.log('数据包:', this.packet);
        yield* next;
    };
};