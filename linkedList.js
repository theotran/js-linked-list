/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

 //TALK IN TERMS OF HEAD AND TAIL



function linkedListGenerator(){

	var head = null;
	var tail = null;
	var length = 0;

	
	
	var newLinkedList = {
		
		getHead: function () {
			return head;
		},
		
		getTail: function () {
			return tail;
		},
		
		add: function (value) {
			var newNode = { 
				value: value,
				next: null
			};
			if (!head) {
				head = newNode;
				tail = newNode;

			} else {
				tail.next = newNode;
				tail = newNode;
			}
			length ++;
			return newNode;


		},

		
			
					
		
		
		remove: function () {

		},
		get: function (targetIndex) {
			var current = head;
			for (var i=0; i < length; i++) {
				if (i == targetIndex) {
					return current;
				} else {
					current = current.next;

				}
			}

			return false;

		},
		
		insert: function () {

		}
	};

	return newLinkedList;
}