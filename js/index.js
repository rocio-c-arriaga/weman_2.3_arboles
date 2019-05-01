//Esta variable guarda una referencia al control de resultado, se declara global para no tener que estar ejecutando document.getElementById en cada ocasión que se necesite.
import BinarySearchTreeNode from './BinarySearchTreeNode';

export default class BinarySearchTreeNode {
	/**
	*@param {function} [nodeValueCompareFunction]
	*/
	constructor(nodeValueCompareFunction){
		this.root = new BinarySearchTreeNode(null, nodeValueCompareFunction);

		//Steal node comparator from the root.
		this.nodeComparator = this.root.nodeComparator;
	}

	/**
	*@param {*} value
	*@return {BinarySearchTreeNode}
	*/
	insert(value) {
		return this.root.insert(value);

	}


	/**
	* @param {*} value
	* @return this.root insert (value);
	*/

	contains (value){
		return this.root.contains (value);
	}

	/** 
	* @parum {*} value
	* @return {boolean}
	*/
	removed(value) {
		return this.root.remove(value);

	}

	/**
	* @return {string}
	*/
	toString() {
		return this.root.toString();
	}
	
}

