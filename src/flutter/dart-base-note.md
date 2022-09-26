# Dart 基础笔记

## 历史

Flutter 是 Google 开源的一个跨平台框架，基于 Dart 语法进行开发，需要 Dart 语法基于进行学习使用。

## 安装环境

可以访问 [Dart 官方文档](https://dart.dev/get-dart) 来查看环境安装，以下提供 Windows 环境安装软件。

下载地址：[https://gekorm.com/dart-windows](https://gekorm.com/dart-windows)（安装非常慢，经常超时，注意心态~）

> ps: 从 Flutter 1.21 开始，Flutter SDK 包含完整的 Dart SDK。因此，如果已安装 Flutter，则可能无需显式下载 Dart SDK。

下载 VS Code 插件：

- Flutter (代码提示)
- dart (代码提示)
- code Runner (运行基础)

## Hello World

- 新建一个 `hello_world.dart` 文件，dart 语言后缀文件名是 `.dart`

- 打开文件键入以下代码：

```dart
void main() {
  print('Hello World!');
}
```

点击鼠标右键，Run Code 或者 Ctrl+Shift+N 运行代码

## Dart 语法

### 注释

同 js 注释语法相同，分别可以使用 `//` 和 `/**/` 来注释和批量注释

### 声明变量

Dart 是一个强大的脚本类语言，所以可以不预先定义变量类型，系统会自动推断变量类型（下面会解释）。

同样，也可以在定义时直接声明类型来规范值，但注意，类型声明不要和 var 同时出现。

```dart
var a = 'this is var';

String b = 'this is String';

int c = 123;
```

所谓 var 会自动推断变量类型是指，当用 var 注册变量时，可以输入任意类型值，但是下次赋值时必须同第一次的值是相同类型，否则会报错。如：

```dart
var str = '';
str = 123	// error: Try changing the type of the left hand side, or casting the right hand side to 'String'.
print(str)
```

### 声明常量

dart 可以通过 `const` 和 `final` 两个关键词来进行定义常量。

区别在于 `final` 不仅有 `const` 的编译时的特性，最重要的是它是惰性初始化，即在运行时第一次使用前才初始化。

如：

```dart
const a = 123;
print(a);
final b = 456;
print(b);

// const date1 = new DateTime.now();  // error: const 不能直接定义 Date 时间
// print(date1);
final date2 = new DateTime.now();
print(date2);
```

## 命名规则

同 js 命名规则一样，不能用的都不能用。不要净想些奇奇怪怪的。

## 数据类型

常用数据类型：

- Number(数值) :
  - int(整型)
  - double(浮点型)
- Strings(字符串) :
  - String
- Booleans(布尔) :
  - bool
- List(数组) :
  - 在 Dart 中，数组是列表对象，所以大多数人只是称它们为列表
- Maps(字典) ：
  - 通常来说，Map 是一个键值对相关的对象。键和值可以是任何类型的对象。

### String(字符串类型)

#### 多行文字

定义时可以使用 `''` 和 `""` ，但是要成对出现。

定义多行文字时可以使用 `'''文字内容'''` ，三个引号来进行包裹。

类似 js 模板字符串。

```dart
String str1 = '123';
String str2 = '''
123
123
123
''';
print(str1);
print(str2);
```

#### 字符串拼接

可以使用字符串包裹，使用 `$` 和 `${}` 来引用变量，或者使用 `+` 来进行拼接。

```dart
String str1 = '你好';
String str2 = 'Dart';

print('$str1$str2');  // 你好Dart
print('${str1}${str2}');  // 你好Dart
print(str1 + str2); // 你好Dart
```

### Number(数值类型)

使用 `int` 和 `double` 来进行定义，分为整型和浮点型数字，可正常进行 `+-*/%`运算。

```dart
int a = 1;
double b = 2.1;
print(a+b); // 3.1
```

### Boolean(布尔类型)

使用 `bool` 来进行定义，只能赋值 `true` 或者 `false`

```dart
bool a = true;
if(a) {
  print('真');
} else {
  print('假');
}
```

### List(数组/集合)

同 `js` 中的 `Array` ，可以通过 `new List()` 来进行定义，或者通过字面量 `[]`。

```dart
var a = [1, 2, 3];
print(a.length);  // 3
a.add(4);
print(a[3]);  // 4
```

#### 定义 List 类型

在声明 List 时可以通过 `<类型>` 来规定内容值的类型。

```dart
var a = new List<String>();
a.add('张三');
print(a);
```

### Map 类型

同 js 对象相似，可能通过字面量 `{}` 创建，`key` 必须要加 `''`，获取值不可以直接使用 `.`，需要使用 `[]`来获取值。

```dart
var person = {'name': '张三', 'age': 18};
print(person);
print(person['name']);
```

也可能通过 `new Map()` 来创建 Map 对象

```dart
var p = new Map();
p['name'] = '李四';
p['age'] = 80;
p['work'] = ['程序员','外卖员'];
print(p);
```

### is 判断数据类型

可以使用 `is` 来判断当前数据是什么类型数据，同 `js` `instanceof` 相似。

```dart
var a = 123;
print(a is String);
print(a is int);
```

## 运算符

### 算术运算符

同 js 相似，略。

### 关系运算符

同 js 相似，略。

### 逻辑运算符

同 js 相似，略。

### 赋值运算符

#### ??=

如果前面为空，就把后面的值赋给前面，否则不操作。

```dart
var a = null;
a ??= 456;
print(a);
```

其余同 js 相似，略。

### 条件运算符

#### ??

判断前面是否有值，有值不操作，无值把后面的值赋值给前面。

```dart
var a;
var b = a ?? 10;
print(b); // 10
```

其余同 js 相似，略。

## 数据类型转换

### Number 与 String 类型转换

`Number` 转 `String` 可以通过 `toString()`

```dart
int a = 123;
print(a.toString() is String);	// true
```

`String` 转 `Number` 可以通过 `.parse()`

```dart
String b = '123';
print(int.parse(b) is int);	// true
print(double.parse(b) is double);	// true
```

### 其他类型转换为 Boolean 类型

#### isEmpty 可以判断字符串是否为空

```dart
String str = '';
print(str.isEmpty); // true
```

#### Number 类型可以根据是否等于 0 来判断。

```dart
num n = 0;
print(n == 0); // true
```

#### 空值可以根据是否等于 null 来判断。

```dart
var a;
print(a == null); // true
```

## 方法 && 属性

### List 的方法和属性

```dart
// List 的方法和属性
List myList = ['苹果', '香蕉', '西瓜'];
print(myList.length); // 获取 List 的长度
print(myList.isEmpty); // 判断 List 是否为空
print(myList.isNotEmpty); // 判断 List 内是否有值
print(myList.reversed); // 翻转数组内容
print(myList.reversed.toList()); // 把其他类型转换为 List
myList.add('桃子'); // 为数组内增加一个数据（只能增加一个）
myList.addAll(['椰子', '葡萄']); // 为数组内增加多个数据，需要 List 包裹
print(myList);
print(myList.indexOf('苹果')); // 查找 List 中是否存在对应数据，如果存在，返回对应下标，不存在返回 -1
myList.remove('西瓜'); // 删除 List 内对应值,值可以是下标或值名
print(myList);
myList.fillRange(1, 2, '草莓'); // 修改内容值，(开始位置，结束位置，修改内容)
print(myList);
myList.insert(1, '桔子'); // 指定位置插入一个数据，(开始位置，插入内容)
print(myList);
myList.insertAll(1, ['蓝莓', '杨桃']); // 指定位置插入多个数据，(开始位置，插入内容)
print(myList);
print(myList.join(',')); // 把 List 转换为字符串
print(myList.join(',').split(',')); // 把字符串转换为 List
```

### Map 的方法和属性

```dart
// Map 的方法和属性
Map person = {'name': "张三", "age": 20};
print(person.keys); // 获取所有的键
print(person.values); // 获取所有的值
print(person.isEmpty); // 判断 List 是否为空
print(person.isNotEmpty); // 判断 List 内是否有值
person.addAll({
  "sex": '男',
  'work': ['敲代码', '送外卖']
}); // 添加键值对
print(person);
person.remove('sex'); // 删除对应键值对
print(person);
print(person.containsKey('name')); // 判断是否包含该键
print(person.containsValue('张三')); // 判断是否包含该值
```

### 循环遍历

```dart
List myList = ['苹果', '香蕉', '西瓜'];
// for 循环
for (var i = 0; i < myList.length; i++) {
  print(myList[i]);
}

// forEach 循环
myList.forEach((value) {
  print(value);
});

// map 循环
print(myList.map((item) => item));

// where 循环，同 js filter 方法相同
print(myList.where((item) => item.length >= 2));

// any 循环，同 js some 方法相同，只要有一个满足就退出循环
print(myList.any((item) => item.length >= 2));

// every 循环，同 js every 方法相同，只有全部满足才退出循环
print(myList.every((item) => item.length >= 2));
```

## 自定义方法

### 注册方法

```dart
void printInfo() {
  print('我是一个自定义方法');
}

printInfo();
```

通过以上方法注册函数方法。`void` 代表没有返回值。

如果有返回值，可以注册对应的返回值类型。如：

```dart
int getNum() {
  var myNum = 123;
  return myNum;
}
print(getNum());
```

> 返回类型可以不定义，但推荐定义一下。

> 注意：方法注册存在作用域，注意作用域范围。

### 方法传参

#### 参数类型

因为 dart 是强数据类型规范的，所以传参时最好设置一下传入参数类型。

```dart
int sumNum(int val) {
  int sum = 0;
  for (var i = 0; i <= val; i++) {
    sum += i;
  }
  return sum;
}

print(sumNum(10));
```

#### 可选参数

可以通过 `[]` 来包裹可选参数使用。

使用 `=` 规定默认参数。

```dart
String printUserInfo(String userName, [var age, String sex = '男']) {
  if (age != null) {
    return '姓名：$userName --- 性别：$sex --- $age';
  } else {
    return '姓名：$userName --- 性别：$sex --- 年龄保密';
  }
}

print(printUserInfo('张三', 12));
print(printUserInfo('张三', null, '女'));
print(printUserInfo('张三'));
```

#### 命名参数

使用 `{}` 包裹，可以定义命名参数，使用时需要指定参数名。

```dart
String printUserInfo(String userName, {var age, String sex = '男'}) {
  return '姓名：$userName --- 性别：$sex --- 年龄：$age';
}
print(printUserInfo('张三', age: 12));
```

### 箭头函数

箭头函数同 js 中相似，但是 dart 中箭头函数后只能执行一句语句，不能执行多句。

### 方法函数

- 命名方法

同 js 相似，略。

- 匿名方法

同 js 相似，略。

- 自执行方法

同 js 相似，略。

## 创建并使用类

Dart 是面向对象的语言，开发过程会经常使用到类来操作。

```dart
class Person {
  String name = '张三';
  int age = 23;
  void getInfo() {
    print('$name --- $age');
  }
}
void main() {
  var p = new Person();
  print(p.name);
  p.getInfo();
}
```

> **注意：创建类需要在入口函数外进行注册。**

### 默认构造函数

使用自定义的类来定义数据时，会自动触发类的默认构造函数。如：

```dart
class Person {
  Person() {
    print('这是构造函数里面的内容，这个方法在实例化时触发。');
  }
}
void main() {
  Person p = new Person();
}
```

主要用途，可以改变函数内的值，用于初始化构造函数

```dart
class Person {
  var name;
  var age;
  Person(String name, int age) {
    this.name = name;
    this.age = age;
  }
  void getInfo() {
    print('$name --- $age');
  }
}
void main() {
  Person p = new Person('张三', 18);
  p.getInfo();
  Person p1 = new Person('李四', 24);
  p1.getInfo();
}
```

默认构建函数可以简写，如下：

```dart
class Person {
  var name;
  var age;
  Person(this.name, this.age);
  void getInfo() {
    print('$name --- $age');
  }
}
void main() {
  Person p = new Person('张三', 18);
  p.getInfo();
  Person p1 = new Person('李四', 24);
  p1.getInfo();
}
```

Dart 中构造函数可以有多个，和类名相同的会定义为默认构造函数，可以自行定义无限个命名构造函数。(同 js 类中的方法)

```dart
class Person {
  var name;
  var age;
  Person(this.name, this.age);
  Person.now() {
    print('我是命名构造函数，我可以定义多个！');
  }
  void getInfo() {
    print('$name --- $age');
  }
}
void main() {
  Person p = new Person.now();
}
```

### 私有属性和方法

可以使用 `_` 把一个属性或者方法定义成私有。但是必须要抽离成一个单独文件才能生效。

私有属性和方法不可以直接使用，只能在当前类里才能使用，可以通过公有方法或属性来调用。

```dart
// 抽离 Person 类为一个新文件 Person.dart
class Person {
  var _name;	// 私有
  var age;
  Person(this._name, this.age);
  Person.now() {
    print('我是命名构造函数');
  }
  void _getInfo() {	// 私有
    print('$_name --- $age');
  }

  String getName() {	// 公有调用
    return this._name;
  }
}
```

```dart
void() {
  Person p = new Person('张三', 18);
  // print(p._name) // error：私有变量不可使用
  // p._getInfo();  // error：私有方法不可使用
  print(p.getName());	// 张三
}
```

### Dart 中的 getter 和 setter

#### `Dart` 中的 `getter` 可以理解为属性，调用可以获取方法中计算所得值。

```dart
class Rect {
  var height;
  var width;

  Rect(this.height, this.width);

  get area {	// 这里可以不用带 ()
    return this.height * this.width;
  }
}

Rect r = new Rect(10, 2);	// 20
print(r.area);	// 相当于属性，不用 () 调用。
```

#### `setter` 定义为一个方法，可以修改方法内的值，但是使用时需要直接 `r.xxx = xxx` 来使用

```dart
class Rect {
  var height;
  var width;

  Rect(this.height, this.width);

  get area {
    return this.height * this.width;
  }

  set areaHeight(val) {
    this.height = val;
  }
}
Rect r = new Rect(10, 2);
r.areaHeight = 20;	// 修改了类里面的 height
print(r.area);	// 40
```

### 初始化实例变量

在使用的时候不需要传入参数，但是在方法初始化时会自动赋值。

可以使用 `:xxx=xx` 跟在默认构造函数后面赋值，如：

```dart
class Rect {
  var height;
  var width;

  Rect() : height = 20, width = 2 {}	// 初始化实例变量

  get area {
    return this.height * this.width;
  }
}
Rect r = new Rect();
print(r.area);
```

### 静态属性和静态方法

可以使用 `static` 关键字来定义类级别的变量和函数

```dart
class StaticPerson {
  static String name = '张三';  // 静态属性
  static void show() {  // 静态方法
    print(name);
  }
}

print(StaticPerson.name); // 张三
StaticPerson.show();  // 张三
```

> 静态成员不可以通过实例直接访问。

> ps: 成员包含属性和方法。

静态方法不能访问非静态成员，但是非静态访求可以访问静态成员。

```dart

class StaticPerson {
  static String name = '张三'; // 静态属性
  int age = 20;
  static void show() {
    // 静态方法
    print(name);
    // print(age);  // error // 静态方法不能访问非静态成员
  }

  void printInfo() {  // 非静态方法可以访问非静态成员以及静态成员
    print(name); // 访问静态属性
    print(this.age); // 访问非静态属性，方法一
    print(age); // 访问非静态属性，方法二
  }
}

StaticPerson r = new StaticPerson();
r.printInfo();
```

> 非静态方法可以直接写变量名来使用静态成员(只支持这一种方法)。
>
> 非静态成员可以通过 `this.xxx` 访问，或直接访问变量名(方法名)，但是推荐使用 `this.xxx` 来访问。

### 对象操作符

- `?` 条件运算符

可以判断对象内是否包含这个属性或方法，如果没有不执行。

```dart
print(p?.name);
```

- `as` 类型转换

`xxx as String` 把前数据类型转换为 `String`

- `is` 类型判断

```dart
int n = 123;
print(n is int);
```

- `..` 级联(连缀)操作

```dart
class Person {
  String name;
  num age;
  Person(this.name, this.age);
  void getInfo() {
    print('${this.name} --- ${this.age}');
  }
}

Person p = new Person('张三', 20);

// p.name = '李四';
// p.age = 18;
// p.getInfo();

//    ||   上面三行代码等同于下面代码

p
  ..name = '李四'
  ..age = 18
  ..getInfo();
```

连缀操作符，可以理解为省略前面对象，类似 `JQuery` 的链式调用。

### 继承

#### 子类可以使用 `extends` 关键词来继承父类。

- 子类可以继承父类里面可见的属性和方法，但是不能继承构造函数。

- 子类能覆写父类的方法 `getter` 和 `setter`。

```dart
class Person {
  String name = '张三';
  num age = 18;

  void printInfo() {
    print('${this.name} --- ${this.age}')
  }
}

class Web extends Person { } // 继承 Person

Web w = new Web();
print(w.name);  // 张三
w.printInfo();  // 张三 --- 18
```

#### 子类可以通过 `super` 来向父类传递实例化参数。

```dart
class Person {
  String name;
  num age;

  Person(this.name, this.age);

  void printInfo() {
    print('${this.name} --- ${this.age}');
  }
}

class Web extends Person {  // 继承父类
  String sex; // 子类自有属性

  Web(String name, num age, this.sex) : super(name, age); // super 赋值给父类传参

  run() { // 子类自有方法
    print('${this.name} --- ${this.age} --- ${this.sex}');
  }
}

Web w = new Web('张三', 20);
print(w.name);  // 20
w.printInfo();  // 张三 --- 20
w.run(); // 张三 --- 20 --- 男
```

> 调用子类属性和方法，**会首先在子类自身查找，如果没有的话才会去父类查找。**

#### 覆写

**同样，子类中也可以覆写父类方法，只要在子类中查找到相同方法，就不会向父类查找了。**

如果要在子类中覆写父类方法的话，**建议在方法上一行添加 `@override` 不需要分号。**当然，不写也不会报错，但是会为后期维护带来一定难度。

#### 子类内调用父类方法

使用 `super` 可以实现在子类方法内调用父类方法。

```dart
class Person {
  String name;
  num age;

  Person(this.name, this.age);

  void printInfo() {
    print('${this.name} --- ${this.age}');
  }
}

class Web extends Person {
  Web(String name, num age) : super(name, age);

  void run() {
    print('下面打印的是父类方法的结果！');
    super.printInfo();  // 子类中使用父类方法。
  }

  @override
  void printInfo() {
    print('这是子类覆写的方法！建议写上 @override！');
  }

Web w = new Web('张三', 20);
w.run(); // 张三 --- 20
}
```

### 抽象类

`Dart` 中的抽象类主要用于约束定义标准。可以使用 `abstract` 关键字来定义抽象类。

**抽象类是没有办法直接实例化使用的，只能通过子类继承使用。**

如果父类定义了一个抽象方法，子类必须覆写这个抽象方法，否则会报错。

同时，抽象类中也有非抽象方法，如下定义：

```dart
abstract class Animal {
  eat(); // 抽象方法，用于规范子类方法。
  printInfo() { // 非抽象方法，可直接继承使用。
    print('我是抽象类中的一个普通方法！');
  }
}

class Dog extends Animal {
  @override // 覆写父类抽象方法
  eat() {
    print('小狗！');
  }
}

class Cat extends Animal {
  @override // 覆写父类抽象方法
  eat() {
    print('小猫！');
  }
}

Dog dog = new Dog();
Cat cat = new Cat();
dog.eat();  // 小狗！
dog.printInfo();  // 我是抽象类中的一个普通方法！
cat.eat();  // 小猫！
```

### 多态

`Dart` 中的多态，允许将子类类型的指针赋值给父类类型的指针，同一个函数调用会有不同的执行效果。

通俗理解就是，**父类定义一个方法不去实现，让继承他的子类去实现，每个子类有不同的表现。**

上面所写的抽象类的 `Demo` 就可以理解为一个多态的实例。

父类定义方法，子类使用，但是多个子类使用的效果是不一样的。

具体多态实现方法是，子类实例赋值给父类引用，如：

```dart
abstract class Animal {
  eat(); // 抽象方法
}

class Dog extends Animal {
  @override // 覆写父类抽象方法
  eat() {
    print('小狗！');
  }

  run() {
    print('run！');
  }
}

Animal dog = new Dog(); // 具体多态实现方法是，子类实例赋值给父类引用
dog.eat();
dog.run();
```

### 接口

#### 接口定义 && Demo 介绍

`Dart` 的接口没有 `interface` 关键字定义接口，而是使用普通类或者抽象类作为接口实现。

同样使用 `implements` 关键字进行实现。

但是，使用普通类或者抽象类作为接口需要将属性和方法全部覆写一遍。

因为抽象类可以定义抽象方法，普通类不可以，所以建议使用抽象类来定义接口。

Demo 介绍：

```dart
/**
 * 定义一个DB库 支持 mysql mssql .
 * mysql mssql 两个类里面都有同样的方法
 */

abstract class Db {
  // 抽象类，当作接口。接口：就是约定，规范。
  var uri; // 数据库的链接地址。
  add(String data); // 定义抽象方法，供子类继承使用。
  save();
  delete();
}

class MySql implements Db { // 子类接口
  @override
  var uri;

  MySql(this.uri);

  @override
  add(String data) {
    print('这是 MySql 的 add 方法! ${data}');
  }

  @override
  save() {
    print('这是 MySql 的 save 方法!');
  }

  @override
  delete() {
    print('这是 MySql 的 delete 方法!');
  }

  remove() {
    print('这是 MySql 的自有方法！');
  }
}

class MsSql implements Db { // 子类接口
  @override
  var uri;

  MsSql(this.uri);

  @override
  add(String data) {
    print('这是 MsSql 的 add 方法! ${data}');
  }

  @override
  save() {
    print('这是 MsSql 的 delete 方法!');
  }

  @override
  delete() {
    print('这是 MsSql 的 delete 方法!');
  }
}

void main() {
  MySql mysql = new MySql('127.0.0.1');
  mysql.add('这是 mysql 传入参数！');
  mysql.remove();
  MsSql mssql = new MsSql('192.168.0.1');
  mssql.add('这是 mssql 传入参数！');
}
```

#### 一个类可以继承多个接口，继承时使用 `,` 分割即可。

如：

```dart
abstract class A {
  printA();
}

abstract class B {
  printB();
}

class C implements A, B { // 继承多个接口，要使用 , 分割。
  @override
  printA() {
    print('继承自 A 的接口！');
  }

  @override
  printB() {
    print('继承自 B 的接口！');
  }
}

void main() {
  C c = new C();
  c.printA();
  c.printB();
}
```

### 类的多继承(mixins)

`Dart` 中，类是不能通过 `extends` 进行多继承的，但是可以通过 `mixins` 来实现类似多继承的功能。

`mixins`中文意思为混入，混合。可以通过 `with` 关键字来进行混入操作。

但是 `mixins` 是存在一定使用条件的：

- 作为 `mixins` 的类只能继承自 `Object`，不能继承其他类
  简单理解：如果 C 继承自 A 和 B ，那么 A 和 B 就不能继承自别的类。
- 作为 `mixins` 的类不能有构造函数。
- 一个类可以 `mixins` 多个 `mixins` 类。
- 一个类可以同时使用 `extends` 和 `mixins`。
- `mixins` 绝不是继承，也不是接口，而是一种全新特性。
- 如果多个 `mixins` 类中存在同一个方法名，那么后面的会把前面的覆盖。

```dart
import 'dart:async';

class Person {
  String name;
  num age;
  Person(this.name, this.age);
  printInfo() {
    print('${this.name} --- ${this.age}');
  }
  void run() {
    print('run Person');
  }
}

class A {
  String info = 'this is A';
  void printA() {
    print('A');
  }
  void run() {
    print('run A');
  }
}

class B {
  void printB() {
    print('B');
  }

  void run() {
    print('run B');
  }
}

class C extends Person with A, B {  // 同时继承和 mixins
  C(String name, num age) : super(name, age);
}

void main() {
  C c = new C('张三', 18);
  print(c.info);  // this is A
  c.printA(); // A
  c.printB(); // B
  c.printInfo();  // 张三 --- 18
  c.run();  // run B
}
```

#### mixins 的实例类型

`mixins` 的类型就是其超类的子类型。

```dart
// 复制代码到上面Demo
C c = new C('张三', 18);
print(c is A);  // true
print(c is B);  // true
print(c is C);  // true
print(c is Person); // true
print(c is Object); // true
```

> `Dart` 中所有类都是继承自 `Object`

### 泛型校验

如果想要一个方法返回值类型和传入参数类型相同，可以使用泛型方法。

创建了泛型方法，可以正常使用，也可以传入类型。

泛型方法如下注册：

```dart
T getData<T>(T value) { // 泛型，传入数据，返回数据为同类型。
  return value;
}

print(getData(123));  // 123 Number
print(getData<String>(123));  // error
print(getData<String>('123'));  // '123' String
```

这个 `T` 可以是任意字母，但是默认使用 `T` 来表示泛型。

同样，如果想要定义泛型类、泛型接口，要在类或者接口的后面添加一个 `<T>` 来进行定义。

## 库

把一些单独的功能抽离成一个文件，需要的时候进行引入。就可以称为一个库。

### 安装库

`Dart` 中主要有三种库：

- 自定义的库
  自己抽离出来的一些功能模块，可以理解为自定义库。
- 系统内置的库
  只要安装完成 `Dart SDK` 内置的一些库：
  - `import 'dart:math';`
  - `import 'dart:io;`
  - `import 'dart:convert';`
- Pub 包管理系统中的库
  托管到远程 Pub 中的一些库。(类似 npm，但过程不是很一样。)

  官网地址：

  - [https://pub.dev/packages](https://pub.dev/packages)
  - [https://pub.flutter-io.cn/packages](https://pub.flutter-io.cn/packages)
  - [https://pub.dartlang.org/flutter](https://pub.dartlang.org/flutter)

  使用说明：

  1. 需要在项目根目录新建一个 `pubspec.yaml` 文件
  2. 在 `pubspec.yaml` 文件配置名称、描述、依赖等信息

  ```yaml
  name: xxx
  description: 名称和描述可以根据项目进行定义，dependencies 写入库的版本信息。
  dependencies:
    http: ^0.12.0+2
    date_format: ^1.0.6
  ```

  3. 然后运行 `pub get` 获取包下载到本地
  4. 项目中引入库 `import 'package:http/http.dart' as http;` 。
  5. 看文档进行使用。

### 重命名库

如果两个库中存在同一个类，造成了冲突，可以使用 `as` 来进行库的重命名来解决。

```dart
import 'lib/Person1.dart';
import 'lib/Person2.dart' as Per2; // 把 Person 重命名为 Per2

main() {
  Person p1 = Person('张三', 18);  // Person1 库里的类
  p1.printInfo();

  Per2.Person p2 = new Per2.Person('李四', 20); // Person2 库里的类，重命名为 Per2
  p2.printInfo();
}
```

### 部分导入库

如果一个库中只需要使用到部分功能，不需要全部导入，可以使用 `show` 来进行部分导入，只导入需要的功能。

```dart
import 'lib/myMath.dart' show getName;

main() {
  getName();
}
```

也可以使用 `hide` 关键字，`hide` 的作用是隐藏哪些功能。

```dart
import 'lib/myMath.dart' hide getName;

main() {
  // getName(); // error 功能被隐藏，不可以使用。
}
```

### 延迟加载

也称为懒加载，可以在需要的时候再进行加载。

懒加载的最大好处是可以减少 App 的启动时间。

懒加载使用 `deferred as` 关键字来指定，当需要使用的时候，使用 `loadLibrary()` 方法来加载

如下例子所示：

```dart
import 'package:deferred/hello.dart' deferred as hello; // 懒加载

main() {
  greet() async {
    await hello.loadLibrary();  // 加载库
    hello.printGreeting();  // 使用库
  }
}
```
