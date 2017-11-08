
(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var todoApp = angular.module('todoApp', [])
		; todoApp.controller('todoController', ['$scope', function ($scope) {
			// 假若这是获取到的数据
			$scope.arr = [
				{ id: 1, name: '吃饭', completed: true },
				{ id: 2, name: '睡觉', completed: true },
				{ id: 3, name: '打豆豆', completed: false },
				{ id: 4, name: '学习', completed: true },
				{ id: 5, name: '喝水', completed: false },
			]
				// 设置一个 ng-model  用于接收和记录用户添加的内容
				; $scope.newItem = ''
				// 添加待办事项的方法
				; $scope.add = function () {
					// 先判断用户是否输入了内容
					if (!$scope.newItem) {
						return;
					}
					// 设置一个对象格式 用于添加数据
					var obj = {
						"id": Math.random(),
						"name": $scope.newItem,
						"completed": false
					}
						// 追加到数组内
						; $scope.arr.push(obj)
						// 当添加完成时 清空输入框的内容
						; $scope.newItem = ''
				}
				// 删除事项方法 在用户点击时记录当前事项的id作为参数传入
				; $scope.remove = function (id) {
					for (var i = 0; i < $scope.arr.length; i++) {
						//循环判断数组内拥有相同id的事项，
						if ($scope.arr[i].id == id) {
							//  然后使用splice进行删除
							$scope.arr.splice(i, 1);
						}
					}
				}

				// 设置一个默认的值
				; $scope.isEdit = -1
				// 双击事件方法
				; $scope.edit = function (id) {
					// 事件发生时设置 $scope.isEdit的值 等于当前项的id值
					// 当两者相同时，ng-class 则会添加 editing 类名，则可以进行编辑
					; $scope.isEdit = id
				}
				// 在编辑时数据其实已经保存，所以在再次进行回车提交时，将当前输入框进行隐藏，将不可编辑的输入框进行显示
				; $scope.amend = function () {
					$scope.isEdit = -1;
				}

				// 设置点击切换全部的状态显示 完成||未完成
				; $scope.selectAll = false
				; $scope.toggleAll = function () {
					for (var i = 0; i < $scope.arr.length; i++) {
						var item = $scope.arr[i]
							; item.completed = $scope.selectAll;
					}
				}
				// 
				; $scope.items = function () {
					var count = 0
						// 设置一个默认的值
						; for (var i = 0; i < $scope.arr.length; i++) {
							// 循环判断当前数据内completed值为false的个数
							if (!$scope.arr[i].completed) {
								count += 1;
							}
						}
					//  return 计算后的数据
					return count;
				}
				// 设置点击，清除全部的已完成事项
				; $scope.delAll = function () {
					for (var i = $scope.arr.length - 1; i >= 0; i--) {
						// 因为删除数据时会改变数组的长度，所以使用 反向 遍历的方法，则删除数据时不会影响到数据的遍历
						if ($scope.arr[i].completed) {
							$scope.arr.splice(i, 1);
						}
					}
				}
				// 设置一个对象 用于过滤器 filter 的筛选条件
				; $scope.dspAll = {};

				// 查看全部事项
				; $scope.showAll = function () {
					// 设置筛选条件为全部显示
					$scope.dspAll = {};
				}
				// 查看全部的未完成事项
				; $scope.unfAll = function () {
					// 设置筛选条件为completed: false
					$scope.dspAll = { completed: false };
				}
				// 查看全部的完成事项
				; $scope.compAll = function () {
					// 设置筛选条件为completed: true
					$scope.dspAll = { completed: true };
				}


		}]


		)
})(window);
