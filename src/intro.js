const str = `/**
* hello，我是Raven
* 是一名前端新手
* 接下来我将演示一段我所学的
* 首先准备一个div
**/
#div1 {
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
/**
 * 接下来把这个div变成八卦图
 * 首先把它弄成圆的
 **/
#div1 {
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/**
 * 八卦图由阴阳形成
 * 首先是左黑右白
 **/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/**
 * 然后中间由一条弧线分割
 * 现在把分割线变成弧线
 **/
#div1::before {
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`

export default str
