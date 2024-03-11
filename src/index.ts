// const func = (name:string) => {
// }
// func(2)

const func = (name:string) => {
}
console.log(func('2'));

// const func = (name:boolean) => {
// }
// func(true)

// const func = (name:string):void => {
//         return
// }
// func(true)

// const func = (name:string):string => {
//         return '2'
// }
// func('2')

// Масив з будь якою кількістю стрінгів:
// const func = (names:string[]):string => {
//         names[0].indexOf()
// }
// func('2')

// Масив з одним стрінговим значенням:
// const func = (names:[string]): string => {
//
// }
// func([3, 5, 8])


// Масив з одним стрінговим, одним булевим і одним числовим значенням:
// const func = (names:[string, boolean, number]) => {
// }
// func(['3', false, 8])


// const func = (names:string[]): void => {
//
// }
// func(['3', 'den', 'manya'])

// Використання функцій в різних файлах:
// const func = (names:string[]): void => {
// }
// func(['3', 'den', 'manya'])
// func(['5', 'ben', 'anya'])
// func(['7', 'men', 'vanya'])

//  any  - заміняє будь який тип,але його
//  не рекомендовано використовувати:
// const func = (names:any[]); {
// };
// func(['3', 'den', 'manya']);
// func(['5', 'ben', 'anya']);
// func(['7', 'men', 'vanya'])

// let a: number = 6
// a='dddd'- так не може бути
// варіанти  які можливі:
// let b:string=a+''
// або ж
// let b:string = a.toString()

// // Що робити якщо це вже не примітивні які вказані вище
// а є в нас ціла структура тобто об'єкт':
//якщо ми хочемо створювати об'єкт визначеної структури щоб вона
// // ще й була типізованою:
// interface IUser{
//     name:string;
//     age:number;
//     house:number;
// }
// const user:IUser ={
//     name:'Max',
//     age:15,
//     house:10
// }
// const user2:IUser={
//     name:'Bax',
//     age:14,
//     house:44
// }

// бувають ситуації коли ми не знаємо яке значення
// в нас буде втому чи іншому полі об'єкта і тут у нас
// в силу вступають дженеріки<T>(T-назва довільна,
// їх може бути декілька вписуються поруч через кому <DATA,T,N>):

// interface IUser<T,data, ff> - можна вписувати багато варіантів
// дженеріків одночасно,

// або ні тобто використовувати лише один дженерік
// interface IUser<T>
// {
//     name:string;
//     age:number;
//     house:number;
//     data:T
// }
// const user1:IUser<number[]>={
//     name:'Max',
//     age:45,
//     house:74,
//     data:[45,22,66,87,69,4]
// }
// const user2:IUser<string>={
//     name:'Max',
//     age:45,
//     house:74,
//     data:'jhjjh'
// }


//в разі якщо ми не хочемо вписувати всі поля в юзера,
// а лише якусь частину з них:
// interface IUser{
//     name:string;
//     age:number;
//     house?:number;
// }
// const user:IUser={
//     name:'jhjjh',
//     age:545
// }
// або інший варіант, для того щоб не плутатись де вказане поле а де ні
// можна вказувати - частина якого інтерфейсу це має бути
// за допомогою Partial:
// interface IUser{
//     name:string;
//     age:number;
//     house:number;
// }
// const user:Partial<IUser>={
//     age:545
// }

//Класи:
// -публічний:
// class User  {
//   public name:string;
//   public age:number;
// constructor(name:string,age:number){
//     this.name = name;
//     this.age = age;
// }
// }
// const user=new User('Bax',15);
// console.log(user.age);

// -приватний class означає те що
// цією змінною можна користуватись тільки всередині цього класу:
// class User {
//     private name: string;
//     private age: number;
//
//     constructor(name: string,
//                 age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// const user = new User('Bax', 15);
// console.log(user);

// щоб в приватному класі дістати поле потрібен
// відповідний метод
// class User {
//     private name: string;
//     private age: number;
//
//     constructor(name: string,
//                 age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     getName():string{
//         return this.name
//     }
// }
//
// const user = new User('Bax', 15);
// console.log(user.getName());

// // але є простіші способи записування методу наведеного
// перед цим вище
// class User {
// constructor(private name: string, private age: number)
// {
// }
//     getName():string{
//         return this.name
//     }
// }
// const user = new User('Bax', 15);
// console.log(user.getName());

// завдяки модифікатору protected ми можемо використовувати відповідну
// змінну всередині класу через this або ж використовувати дану змінну в
// класі від якого ми унаслідувались, в "сина" цього класу:
// class User {
// constructor(protected name: string, private age: number)
// {
// }
//     getName():string{
//         return this.name
//     }
// }
// const user = new User('Bax', 15);
// console.log(user.getName());

//  наш клас може бути також типом для чогось іншого,
//  до прикладу, ми створимо масив юзерів:
// class User {
// constructor(protected name: string, private age: number)
// {
// }
//     getName():string{
//         return this.name
//     }
// }
// const user = new User('Bax', 15);
// console.log(user.getName());
// const users:User[]=[
//     new User('Fax', 26),
//     new User('poplavsky', 67),
//     new User('barbos', 6)]
// console.log(users, user);
// -щось інше від відповідного зразка додати неможливо

//
// class Car {
// constructor(
//     private seats:number, private brand:string, private year:number) {
// }
// start():void{
//     console.log('yoklmn');
// }
// getInfo():void{
//     console.log(`Brand:${this.brand}--seats:${this.seats}--year${this.year}`)
// }
// }
// const car = new Car(5,"Subaru",2022);
// car.getInfo()
// car.start()
//
// class ElectroCar extends Car{
//     constructor(seats:number, brand:string, year:number , private enginePover:number) {
//         super(seats, brand, year);
//     }
// }

//

// описавши метод який повертає щось, наприклад булеві значення.
// Ми до свого класу тепер можемо імплементувати свій інтерфейс IElectric:
// // що в свою чергу буде заставляти мене всій його дані та методи
// interface IElectric{
//     enginePower:number;
//     getLedStatus():boolean;
// }
// class Car implements IElectric{
//     enginePower:number;
// constructor(
//     private seats:number, private brand:string, private year:number, enginePower:number) {
//         this.enginePower = enginePower
// }
//     getLedStatus(): boolean {
//         return true
//     }
// }
// start():void{
//     console.log("rrrrrrr");
// }
// getInfo():void{
//     console.log(`Brand:${this.brand}--seats:${this.seats}--year${this.year}`)
// }
// }




//        ТС дає нам доступ до абстракції:
//
// abstract class Shape{
//     abstract perimeter():number;
//
//     abstract area():number;
// }
//
// class Triangle extends Shape{
//
//     constructor(private a:number, private b:number, private c:number) {
//         super();
//     }
//     perimeter(): number {
//         return this.a+this.b+this.c*2
//     }
//
//     area(): number {
//         return this.a*this.b/2
//     }
// }
//
// class Rectangle extends Shape{
// constructor(private a:number, private b:number) {
//     super();
// }
//     perimeter(): number {
//         return this.a+this.b*2
//     }
//
//     area(): number {
//         return this.a*this.b
//     }
// }
// const shapes:Shape[]=[
//     new Triangle(2,4,2),
//     new Rectangle(4,2),
//     new Triangle(4,8,10)
// ]
// for (let shape of shapes) {
//     console.log(shape.constructor['name']);
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }
let a = 10;
console.log(a);