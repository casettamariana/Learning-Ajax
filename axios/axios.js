axios.get('https://api.github.com/users/casettamariana')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });
