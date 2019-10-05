		
			function createTyper(str, identifier) {
			const words = str.split('|')
			const options = createOptions(1,words)
			const toAttach = createElemAndAttachToParent(identifier)
			const myTyper = new Typed(toAttach,options)
			return myTyper
			}
			
			const createOptions = (spd,words) => ({
				strings : words,
				typeSpeed : spd ? spd : 0,
				backSpeed : 1,
				loop:true
			})
			
			function createElemAndAttachToParent(identifier){
				const elem = document.createElement('span')
				const parent = document.querySelector(identifier)
				parent.appendChild(elem)
				elem.setAttribute('id','' + identifier.split(/[.#]/)[1]+'-child')
				return "#" + elem.getAttribute('id')
			}
