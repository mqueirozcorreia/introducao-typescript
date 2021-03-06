(function e(t, n, r) { function s(o, u) { if (!n[o]) { if (!t[o]) { var a = typeof require == "function" && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); var f = new Error("Cannot find module '" + o + "'"); throw f.code = "MODULE_NOT_FOUND", f } var l = n[o] = { exports: {} }; t[o][0].call(l.exports, function (e) { var n = t[o][1][e]; return s(n ? n : e) }, l, l.exports, e, t, n, r) } return n[o].exports } var i = typeof require == "function" && require; for (var o = 0; o < r.length; o++)s(r[o]); return s })({
    1: [function (require, module, exports) {
        "use strict";
        //Definição de classe com construtor
        //A palavra chave export é para informar que esta classe é acessível através de import por outro modulos
        var Student = (function () {
            function Student(firstName, middleInitial, lastName) {
                this.firstName = firstName;
                this.middleInitial = middleInitial;
                this.lastName = lastName;
                this.fullName = firstName + " " + middleInitial + " " + lastName;
                this.createdAt = new Date;
            }
            return Student;
        }());
        exports.Student = Student;
        //Priorize o uso de let e const ao invés de var (it uses what some call lexical-scoping or block-scoping)
        //https://www.typescriptlang.org/docs/handbook/variable-declarations.html
        var user = new Student("Mateus", "Q.", "Correia");
        //Repare que passou o Student como Person(para a função helloWorld), sem haver implementação da interface
        console.log(helloWorld(user));
        //Exporta a função helloWorld para ser utilizada em outros módulos
        //https://www.typescriptlang.org/docs/handbook/modules.html
        function helloWorld(person) {
            //Uso do template string 
            //These strings are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.
            //https://www.typescriptlang.org/docs/handbook/basic-types.html
            return "Hello, " + person.fullName;
        }
        exports.personHelloWorld = helloWorld;
    }, {}], 2: [function (require, module, exports) {
        "use strict";
        var basic = require("./01Basic");
        function showHello(divName, name) {
            var elt = document.getElementById(divName);
            elt.innerText = basic.personHelloWorld(new basic.Student("First", "Middle", "Last"));
        }
        showHello("greeting", "TypeScript");
    }, { "./01Basic": 1 }]
}, {}, [2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvMDFCYXNpYy50cyIsInNyYy8wM0Jyb3dzZXJVc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQSxvQ0FBb0M7QUFDcEMsd0dBQXdHO0FBQ3hHO0lBSUksaUJBQW1CLFNBQWtCLEVBQVMsYUFBc0IsRUFBUyxRQUFpQjtRQUEzRSxjQUFTLEdBQVQsU0FBUyxDQUFTO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQVM7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQzFGLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxhQUFhLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztRQUNqRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSwwQkFBTztBQWtCcEIseUdBQXlHO0FBQ3pHLHlFQUF5RTtBQUN6RSxJQUFJLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRWxELHlHQUF5RztBQUN6RyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRTlCLGtFQUFrRTtBQUNsRSwyREFBMkQ7QUFFM0Qsb0JBQW9CLE1BQWU7SUFDL0IseUJBQXlCO0lBQ3pCLDJIQUEySDtJQUMzSCwrREFBK0Q7SUFDL0QsTUFBTSxDQUFDLFlBQVcsTUFBTSxDQUFDLFFBQVcsQ0FBQztBQUN6QyxDQUFDO0FBR3NCLHNDQUFnQjs7O0FDdEN2QyxpQ0FBbUM7QUFFbkMsbUJBQW1CLE9BQWUsRUFBRSxJQUFZO0lBQzVDLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBRUQsU0FBUyxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvL0RlZmluacOnw6NvIGRlIGNsYXNzZSBjb20gY29uc3RydXRvclxyXG4vL0EgcGFsYXZyYSBjaGF2ZSBleHBvcnQgw6kgcGFyYSBpbmZvcm1hciBxdWUgZXN0YSBjbGFzc2Ugw6kgYWNlc3PDrXZlbCBhdHJhdsOpcyBkZSBpbXBvcnQgcG9yIG91dHJvIG1vZHVsb3NcclxuZXhwb3J0IGNsYXNzIFN0dWRlbnQge1xyXG4gICAgZnVsbE5hbWU6IHN0cmluZztcclxuICAgIC8vcHJvcHJpZWRhZGUgc8OzIG1vZGlmaWNhw6fDo28gbm8gbW9tZW50byBkYSBjcmlhw6fDo29cclxuICAgIHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlyc3ROYW1lIDogc3RyaW5nLCBwdWJsaWMgbWlkZGxlSW5pdGlhbCA6IHN0cmluZywgcHVibGljIGxhc3ROYW1lIDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5mdWxsTmFtZSA9IGZpcnN0TmFtZSArIFwiIFwiICsgbWlkZGxlSW5pdGlhbCArIFwiIFwiICsgbGFzdE5hbWU7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkQXQgPSBuZXcgRGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFBlcnNvbiB7XHJcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcclxuICAgIC8vUHJvcHJpZWRhZGUgb3BjaW9uYWwgdGVtIG8gJz8nIG5hIGZyZW50ZSBkbyBub21lXHJcbiAgICBhZ2U/OiBudW1iZXI7XHJcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gICAgZnVsbE5hbWU6IHN0cmluZztcclxufVxyXG5cclxuLy9Qcmlvcml6ZSBvIHVzbyBkZSBsZXQgZSBjb25zdCBhbyBpbnbDqXMgZGUgdmFyIChpdCB1c2VzIHdoYXQgc29tZSBjYWxsIGxleGljYWwtc2NvcGluZyBvciBibG9jay1zY29waW5nKVxyXG4vL2h0dHBzOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL3ZhcmlhYmxlLWRlY2xhcmF0aW9ucy5odG1sXHJcbmxldCB1c2VyID0gbmV3IFN0dWRlbnQoXCJNYXRldXNcIiwgXCJRLlwiLCBcIkNvcnJlaWFcIik7XHJcblxyXG4vL1JlcGFyZSBxdWUgcGFzc291IG8gU3R1ZGVudCBjb21vIFBlcnNvbihwYXJhIGEgZnVuw6fDo28gaGVsbG9Xb3JsZCksIHNlbSBoYXZlciBpbXBsZW1lbnRhw6fDo28gZGEgaW50ZXJmYWNlXHJcbmNvbnNvbGUubG9nKGhlbGxvV29ybGQodXNlcikpO1xyXG5cclxuLy9FeHBvcnRhIGEgZnVuw6fDo28gaGVsbG9Xb3JsZCBwYXJhIHNlciB1dGlsaXphZGEgZW0gb3V0cm9zIG3Ds2R1bG9zXHJcbi8vaHR0cHM6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svbW9kdWxlcy5odG1sXHJcblxyXG5mdW5jdGlvbiBoZWxsb1dvcmxkKHBlcnNvbiA6IFBlcnNvbikge1xyXG4gICAgLy9Vc28gZG8gdGVtcGxhdGUgc3RyaW5nIFxyXG4gICAgLy9UaGVzZSBzdHJpbmdzIGFyZSBzdXJyb3VuZGVkIGJ5IHRoZSBiYWNrdGljay9iYWNrcXVvdGUgKGApIGNoYXJhY3RlciwgYW5kIGVtYmVkZGVkIGV4cHJlc3Npb25zIGFyZSBvZiB0aGUgZm9ybSAkeyBleHByIH0uXHJcbiAgICAvL2h0dHBzOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL2Jhc2ljLXR5cGVzLmh0bWxcclxuICAgIHJldHVybiBgSGVsbG8sICR7IHBlcnNvbi5mdWxsTmFtZSB9YDtcclxufVxyXG5cclxuLy/DiSBwb3Nzw612ZWwgcmVub21lYXIgbyBxdWUgc2Vyw6EgdXRpbGl6YWRvIHBlbG9zIGNvbnN1bWlkb3Jlc1xyXG5leHBvcnQgeyBoZWxsb1dvcmxkIGFzIHBlcnNvbkhlbGxvV29ybGQgfTsiLCJpbXBvcnQgKiBhcyBiYXNpYyBmcm9tIFwiLi8wMUJhc2ljXCI7XHJcblxyXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2TmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdk5hbWUpO1xyXG4gICAgZWx0LmlubmVyVGV4dCA9IGJhc2ljLnBlcnNvbkhlbGxvV29ybGQobmV3IGJhc2ljLlN0dWRlbnQoXCJGaXJzdFwiLCBcIk1pZGRsZVwiLCBcIkxhc3RcIikpO1xyXG59XHJcblxyXG5zaG93SGVsbG8oXCJncmVldGluZ1wiLCBcIlR5cGVTY3JpcHRcIik7Il19
