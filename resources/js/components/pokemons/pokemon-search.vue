<template>
    <div class="container h-100">
        <div class="d-flex justify-content-center h-100">
            <div class="searchbar">
                <input class="search_input" type="text" name="" placeholder="Search..." @keyup="search">
                <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
        methods:{

            search(e){
                
                const {value} = e.target;
                
                const url = 'pokemons/search';

                axios
                .post(url,{value})
                .then(response => {
                    
                    const {pokemons} = response.data;

                    if(pokemons.length)
                        this.$store.dispatch('searchPokemons', pokemons);
                    else
                        this.$store.dispatch('getPokemons');
                
                })
                .catch(e => console.log(e));
            }

        }

    }
</script>

<style scope="true">
    .searchbar{
    margin-bottom: auto;
    margin-top: auto;
    height: 60px;
    background-color: #353b48;
    border-radius: 30px;
    padding: 10px;
    }

    .search_input{
    color: white;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color:transparent;
    line-height: 40px;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_input{
    padding: 0 10px;
    width: 450px;
    caret-color:red;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_icon{
    background: white;
    color: #e74c3c;
    }

    .search_icon{
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color:white;
    }
</style>