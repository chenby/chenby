//感谢司徒正美大神，崇拜ing
//为兼容ie的模拟Object.keys()
Object.showkeys = function(obj) {
	var a=[]; 
	for(a[a.length] in obj);//a[a.lenght]很亮
	return a;
}
//nass Framework的合并对象，支持深拷贝的方法
function mix(target,source){
	var args=[].slice.call(arguments);
	var ride=typeof args[args.length-1]=='boolean'?args.pop():true;//判断深拷贝的布尔，一句话经典
	...
}
// jq的makeAarry的复制数组
var i=array.length;
while(i)
	ret[--i]=array[i]
//判断函数可以用return返回，其他情况下还可以减少对象的实例；
var toAarry =function(){
	return isIE()?	function(a,i,j,res){...}//以后每次执行都不用判断了，直接取toAarry
				: function(a,i,j){...}
}
//typeof 的陷阱
typeof null//'object'
typeof []//object
typeof document.childNodes //safari "function"
typeof document.createElement('embed')//ff3-10 "function"
typeof document.createElement('object')//ff3-10 "function"
typeof document.createElement('applet')//ff3-10 "function"
typeof /\d/i
typeof window.alert //IE678 "object"
//instanceof不能跨文档比较 iframe里面的数组实例不是父窗口的Array实例
instanceof
//contructor的陷阱 
//旧版本ie下dom bom对象的constructor属性没有暴露出来
//isNaN字符串，对象都返回true
function isNaN(obj){return obj!==obj}
function isNull(obj){return obj===null}
function isUndefined(obj){return obj==void 0;}
//typeof判断string,number,boolean,function可满足90%的需求
typeof new Boolean(1);//"object"
typeof new Number(1);//"object"
typeof new String(1);//"object"
//各种框架的isAarry...
//判断window
function isWindow(){
	window==document//IE678 true
	document==window//IE678 false
}
//判断array的探索历程
return arr.instanceof Array;
return !!arr&&arr.constructor==Array;
return typeof arr.sort=='function'
return try{
	Array.prototype.toString.call(o);
	return true;
}catch(e){

}return false;
//复制字符串，复习join
function repeat(target,n){
	return (new Array(n+1)).join(target);
}
function repeat(target,n){
	return [].join.call({length:n+1},target)
}

//unshift ie6.7下不返回长度
//splice一个参数的情况下，ie6、7、8默认为0，其他浏览器默认为数组length

//bind（）
var observable=function(val){
	var cur=val;
	function field(neo){
		if (arguments.length) {
			if (cur!==neo) {
				cur=neo;
			};
		} else{
			return cur;
		};
	}
	field();
	return field;
}
Function.prototype.bind = function(context) {
	if (arguments.length<2&&context==void 0) {
		return this;
	}
	var __method=this,args=[].slice.call(arguments,1);
	return function(){
		return __method.apply(context,args.concat.apply(args,arguments));
	}
}
// 柯里化函数
function curry(fn){
	function inner(len,arg){
		if (len==0) {
			return fn.apply(null,arg)
		};
		return function(x){
			return inner(len-1,arg.concat(x));
		}
	}
	return inner(fn.length,[])
}
function sum(x,y,z,w){
	return x+y+z+w;
}
curry(sum)('a')('b')('c')('d')//'abcd'
//若用户传入多个参数
function curry2(fn){
	function inner(len,arg){
		if (len<=0) {
			return fn.apply(null,arg)
		};
		return function(){
			return inner(len-arguments.length,arg.concat(Array.apply([],arguments)))
		}
	}
	return inner(fn.length,[])
}
curry2(sum)()('b','c')('d')//'bcd'
/*
	ie678 
	getAttribute不能返回用户预设，返回一个CSSStyleDeclaration
	getAttribute href 会自动补充为完整路径
	不支持opacity，要使用滤镜
	在用innerHTML创建table元素，会被自动添加tbody，其他只返回<table></table>
	用innerHTML转换字符串为元素节点，ie支持不完好，包括script,link,style,meta在内的no-scope元素都转换失败，需要在它前面添加一些字符，H5标签支持同不好。
	判断select元素的disabled属性是否影响到子元素disabled取值。在Safari中，一旦select元素被disabled，他的孩子也被disabled
	如果一个checkbox被设置checked=true，多次克隆后，只有Safari4中返回false
	判断克隆元素时是否克隆attachEvent绑定的事件，只有旧版本IE及其兼容模式返回false
	判断浏览器是否支持encoding属性，ie67要用encoding代替
	判断能否删除元素节点自定义属性，旧版本IE不支持，直接置为undefined
	判断getComputedStyle能否正确取得元素marginRight，Safari早期版本总是取回一个很大的数
	当复制品指定了background-*样式的元素，对复制品的背景清空也会清空原来的
*/
//拷贝继承，prototype.js的extend=>
function extend(destination,source){
	for(var property in source)
	destination[property]=source[properyt];
	return destination;
}//但是无法通过instanceof验证

//让我们看看new的时候发生了什么
1.创建了一个空对象instance；
2.instance.__proto__=instanceClss.prototype;
3.将构造器函数里面的this=instance
4.执行构造器里的代码
5.判断有没有返回值，没有默认undefined，如果返回值为复合数据类型，则直接返回，否则返回this
//so
function A(){
	console.log(this.__proto__.aa);//1
	this.aa=2
}
A.prototype={
	aa:1
}
var a=new A;
console.log(a.aa);//2
a.__proto__={
	aa:3
}
delate a.aa;//删除特权属性
console.log(a.aa);//3
//原型继承
function A(){}
A.prototype={
	aa:1
}
function bridge(){};
bridge.prototype=A.prototype;
function B(){}
B.prototype=new bridge();
B.prototype.constructor=B;
var b=new B;
B.prototype.cc=function(){
	alert(3)
}
console.log(b.__proto__==B.prototype);//true
console.log(b.__proto__.__proto__===A.prototype);//true





















