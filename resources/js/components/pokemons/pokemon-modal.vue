<template>
    <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{pokemon.name}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <img :src="`img/${pokemon.picture}`" :alt="pokemon.picture" class="image">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">{{"Close"}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    
        props:['pokemon']

    }
</script>

<style scope="true">

    .image {
        width: 50%;
        height: auto;
    }
    
</style>