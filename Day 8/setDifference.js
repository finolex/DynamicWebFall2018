module.exports = {
	setDifference: function(set1, set2) {
		set3 = [];
		for(var i = 0; i < set1.length; i++){
			if (set2.includes(set1[i]) == false){
				set3.push(set1[i]);
			}
		}

		for(var i = 0; i < set2.length; i++){
			if (set1.includes(set2[i]) == false){
				set3.push(set2[i]);
			}
		}

		return set3;
	}
}