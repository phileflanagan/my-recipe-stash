"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function Nav() {
	return React.createElement(
		"header",
		null,
		React.createElement(
			"nav",
			{ className: "navbar navbar-default" },
			React.createElement(
				"div",
				{ className: "container" },
				React.createElement(
					"div",
					{ className: "navbar-header" },
					React.createElement(
						"button",
						{ type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": "#myNavbar" },
						React.createElement("span", { className: "icon-bar" }),
						React.createElement("span", { className: "icon-bar" }),
						React.createElement("span", { className: "icon-bar" })
					),
					React.createElement(
						"a",
						{ className: "navbar-brand", href: "#" },
						React.createElement("span", { className: "glyphicon glyphicon-ice-lolly-tasted" }),
						" My Recipe Stash"
					)
				),
				React.createElement(
					"div",
					{ className: "collapse navbar-collapse", id: "myNavbar" },
					React.createElement(
						"ul",
						{ className: "nav navbar-nav navbar-right" },
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								"Home"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								"Recipes"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								"Links"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								"Reviews"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								"Store"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								"FAQ"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								"Contact"
							)
						)
					)
				)
			)
		)
	);
};

var Footer = function Footer() {
	return React.createElement(
		"footer",
		{ className: "text-center" },
		React.createElement(
			"div",
			{ className: "innerFooter" },
			React.createElement(
				"small",
				{ className: "text-muted" },
				"© Copyright 2016 Phil Flanagan"
			)
		)
	);
};

var AddButton = function (_React$Component) {
	_inherits(AddButton, _React$Component);

	function AddButton() {
		_classCallCheck(this, AddButton);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	AddButton.prototype.render = function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"button",
				{ className: "btn btn-default  pull-right",
					"data-toggle": "modal",
					"data-target": "#addModal" },
				React.createElement("span", { className: "glyphicon glyphicon-plus" }),
				" Add Recipe"
			),
			React.createElement(Modal, { role: "add", addRecipe: this.props.addRecipe })
		);
	};

	return AddButton;
}(React.Component);

var EditButton = function (_React$Component2) {
	_inherits(EditButton, _React$Component2);

	function EditButton() {
		_classCallCheck(this, EditButton);

		return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	}

	EditButton.prototype.render = function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"button",
				{ className: "btn btn-default btn-sm pull-right",
					"data-toggle": "modal",
					"data-target": "#id" + this.props.id },
				React.createElement("span", { className: "glyphicon glyphicon-pencil" })
			),
			React.createElement(Modal, { role: "edit",
				editId: this.props.id,
				name: this.props.name,
				ingredients: this.props.ingredients,
				editRecipe: this.props.editRecipe })
		);
	};

	return EditButton;
}(React.Component);

//Work in Progress

var DeleteButton = function (_React$Component3) {
	_inherits(DeleteButton, _React$Component3);

	function DeleteButton() {
		_classCallCheck(this, DeleteButton);

		return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
	}

	DeleteButton.prototype.handleDelete = function handleDelete() {
		var id = this.props.id;
		this.props.deleteRecipe(id);
	};

	DeleteButton.prototype.render = function render() {
		return React.createElement(
			"button",
			{
				className: "btn btn-danger btn-sm pull-right",
				role: "button",
				"data-toggle": "collapse",
				"data-parent": "#accordion",
				href: "#collapse" + this.props.id,
				"aria-expanded": "false",
				"aria-controls": "collapse" + this.props.id,
				onClick: this.handleDelete.bind(this) },
			React.createElement("span", { className: "glyphicon glyphicon-trash" })
		);
	};

	return DeleteButton;
}(React.Component);

var Recipe = function (_React$Component4) {
	_inherits(Recipe, _React$Component4);

	function Recipe() {
		_classCallCheck(this, Recipe);

		return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
	}

	Recipe.prototype.render = function render() {
		// split ingredients into an array, then make each element a <li> item
		var ingredients = this.props.ingredients.split(",").map(function (ingredient) {
			return React.createElement(
				"li",
				{ key: ingredient, className: "list-group-item" },
				ingredient
			);
		});

		return React.createElement(
			"div",
			{ className: "panel panel-success" },
			React.createElement(
				"div",
				{
					className: "panel-heading",
					role: "tab",
					id: "heading" + this.props.id },
				React.createElement(
					"h4",
					{ className: "panel-title" },
					React.createElement(
						"a",
						{
							role: "button",
							"data-toggle": "collapse",
							"data-parent": "#accordion",
							href: "#collapse" + this.props.id,
							"aria-expanded": "false",
							"aria-controls": "collapse" + this.props.id },
						this.props.name
					)
				)
			),
			React.createElement(
				"div",
				{
					id: "collapse" + this.props.id,
					className: "panel-collapse collapse",
					role: "tabpanel",
					"aria-labelledby": "heading" + this.props.id },
				React.createElement(
					"h4",
					{ className: " text-center" },
					"Ingredients"
				),
				React.createElement(
					"ul",
					{ className: "list-group" },
					ingredients
				),
				React.createElement(
					"div",
					{ className: "panel-body" },
					React.createElement(DeleteButton, {
						id: this.props.id,
						deleteRecipe: this.props.deleteRecipe }),
					React.createElement(EditButton, {
						id: this.props.id,
						name: this.props.name,
						ingredients: this.props.ingredients,
						editRecipe: this.props.editRecipe })
				)
			)
		);
	};

	return Recipe;
}(React.Component);

var Modal = function (_React$Component5) {
	_inherits(Modal, _React$Component5);

	function Modal(props) {
		_classCallCheck(this, Modal);

		var _this5 = _possibleConstructorReturn(this, _React$Component5.call(this, props));

		if (_this5.props.role === "add") {
			_this5.title = "Add a New Recipe"; //Title in modal
			_this5.id = "addModal"; //<div> id
			_this5.input = ""; //Recipe Name
			_this5.inputId = "inputId"; //<input> id
			_this5.text = ""; //Recipe Ingredients
			_this5.textId = "textId"; //<textarea> id
			_this5.button = "Add Recipe"; //Button in modal
		} else if (_this5.props.role === "edit") {
				_this5.title = "Edit This Recipe";
				_this5.id = "id" + _this5.props.editId;
				_this5.input = _this5.props.name;
				_this5.inputId = "input" + _this5.props.editId;
				_this5.text = _this5.props.ingredients;
				_this5.textId = "edit" + _this5.props.editId;
				_this5.button = "Save";
			} else {
				console.error("Unexpected Modal Type");
			}
		_this5.state = {
			title: _this5.title,
			id: _this5.id,
			input: _this5.input,
			inputId: _this5.inputId,
			text: _this5.text,
			textId: _this5.textId,
			button: _this5.button
		};
		return _this5;
	}

	Modal.prototype.clickHandler = function clickHandler() {
		// handle add recipe modal
		if (this.props.role === "add") {
			var addName = $("#" + this.state.inputId).val();
			var addIngr = $("#" + this.state.textId).val();

			// handle blank strings
			if (addName === "") addName = "Untitled";
			if (addIngr === "") addIngr = "No Ingredients";
			this.props.addRecipe(addName, addIngr);
			$("#" + this.state.inputId).val("");
			$("#" + this.state.textId).val("");
		}
		// handle edit recipe modal
		else if (this.props.role === "edit") {
				var editName = $("#" + this.state.inputId).val();
				var editIngr = $("#" + this.state.textId).val();

				// handle blank strings
				if (editName === "") editName = "Untitled";
				if (editIngr === "") editIngr = "No Ingredients";
				this.props.editRecipe(this.props.editId, editName, editIngr);
			} else {
				console.error("Improper Role Call");
			}
	};

	Modal.prototype.render = function render() {
		return React.createElement(
			"div",
			{ id: this.state.id, className: "modal fade", role: "dialog" },
			React.createElement(
				"div",
				{ className: "modal-dialog" },
				React.createElement(
					"div",
					{ className: "modal-content" },
					React.createElement(
						"div",
						{ className: "modal-header" },
						React.createElement(
							"button",
							{
								type: "button",
								className: "close",
								"data-dismiss": "modal" },
							"×"
						),
						React.createElement(
							"h4",
							{ className: "modal-title text-center" },
							this.state.title
						)
					),
					React.createElement(
						"div",
						{ className: "modal-body" },
						React.createElement(
							"form",
							{ role: "form" },
							React.createElement(
								"div",
								{ className: "form-group" },
								React.createElement(
									"label",
									{ "for": this.state.inputId },
									"Recipe Name"
								),
								React.createElement("input", { type: "text",
									className: "form-control",
									id: this.state.inputId,
									defaultValue: this.state.input })
							),
							React.createElement(
								"div",
								{ className: "form-group" },
								React.createElement(
									"label",
									{ "for": this.state.textId },
									"Ingredients"
								),
								React.createElement(
									"small",
									null,
									" (seperate by commas)"
								),
								React.createElement("textarea", { type: "text",
									className: "form-control",
									id: this.state.textId,
									defaultValue: this.state.text })
							)
						)
					),
					React.createElement(
						"div",
						{ className: "modal-footer" },
						React.createElement(
							"button",
							{ type: "button",
								className: "btn btn-primary",
								"data-dismiss": "modal",
								onClick: this.clickHandler.bind(this) },
							this.state.button
						),
						React.createElement(
							"button",
							{ type: "button",
								className: "btn btn-default",
								"data-dismiss": "modal" },
							"Close"
						)
					)
				)
			)
		);
	};

	return Modal;
}(React.Component);

var RecipeBox = function (_React$Component6) {
	_inherits(RecipeBox, _React$Component6);

	function RecipeBox(props) {
		_classCallCheck(this, RecipeBox);

		var _this6 = _possibleConstructorReturn(this, _React$Component6.call(this, props));

		_this6.ph;
		if (localStorage.getItem("_recipes_") === null) {
			_this6.ph = _this6.props.placeholder;
		} else {
			_this6.ph = JSON.parse(localStorage._recipes_);
		}
		_this6.state = {
			recipes: _this6.ph
		};
		return _this6;
	}

	RecipeBox.prototype.componentWillUpdate = function componentWillUpdate() {
		localStorage._recipes_ = JSON.stringify(this.state.recipes);
		// console.log("Will Update: " + JSON.stringify(this.state.recipes));
	};

	RecipeBox.prototype.addRecipe = function addRecipe(name, ingredients) {
		var recipes = this.state.recipes;
		var newRecipe = {
			id: recipes.length,
			name: name,
			ingredients: ingredients
		};
		recipes.push(newRecipe);
		this.setState({
			recipes: recipes
		});
	};

	RecipeBox.prototype.editRecipe = function editRecipe(id, name, ingredients) {
		var recipes = this.state.recipes;
		var newRecipe = {
			id: id,
			name: name,
			ingredients: ingredients
		};
		recipes[id] = newRecipe;
		this.setState({
			recipes: recipes
		});
	};

	RecipeBox.prototype.deleteRecipe = function deleteRecipe(id) {
		var recipes = this.state.recipes;
		recipes.splice(id, 1);

		for (var i = 0; i < recipes.length; i++) {
			recipes[i]['id'] = i;
		}

		this.setState({
			recipes: recipes
		});

		console.log(this.state.recipes);
	};

	RecipeBox.prototype.outputRecipes = function outputRecipes() {
		var _this7 = this;

		var recipes = this.state.recipes.map(function (recipe) {
			return React.createElement(Recipe, {
				id: recipe.id,
				name: recipe.name,
				ingredients: recipe.ingredients,
				editRecipe: _this7.editRecipe.bind(_this7),
				deleteRecipe: _this7.deleteRecipe.bind(_this7) });
		});
		return recipes;
	};

	RecipeBox.prototype.render = function render() {
		return React.createElement(
			"div",
			{ className: "row" },
			React.createElement(
				"div",
				{ className: "col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1" },
				React.createElement(
					"div",
					{ className: "panel-group", id: "accordion" },
					this.outputRecipes()
				),
				React.createElement(AddButton, { addRecipe: this.addRecipe.bind(this) })
			)
		);
	};

	return RecipeBox;
}(React.Component);

// Layout Component

var RecipeBook = function (_React$Component7) {
	_inherits(RecipeBook, _React$Component7);

	function RecipeBook() {
		_classCallCheck(this, RecipeBook);

		return _possibleConstructorReturn(this, _React$Component7.apply(this, arguments));
	}

	RecipeBook.prototype.render = function render() {
		var placeholderRecipes = [{
			id: 0,
			name: "Veggie Burger",
			ingredients: "blackbeans, mushroom, flaxseed, lentils, spices, miso"
		}, {
			id: 1,
			name: "Burrito",
			ingredients: "tortilla, rice, corn, blackkbeans, salsa, sofritas, lettuce"
		}, {
			id: 2,
			name: "Sweet Potato Sushi",
			ingredients: "sweet potato, white rice, rice vinegar, sugar, nori, avocado"
		}, {
			id: 3,
			name: "Curried Potatoes",
			ingredients: "potatoes, garam masala, curry powder, smoked paprika, oil"
		}];
		return React.createElement(
			"div",
			{ id: "mainContainer" },
			React.createElement(Nav, null),
			React.createElement(RecipeBox, { placeholder: placeholderRecipes }),
			React.createElement(Footer, null)
		);
	};

	return RecipeBook;
}(React.Component);

ReactDOM.render(React.createElement(RecipeBook, null), document.getElementById('app'));