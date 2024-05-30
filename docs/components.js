//componentes reutilizables para la documentación

module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'taskId',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title :{
                        type:'string',
                        description:"Task name",
                        example:"Unidad 1"
                    },
                    completed:{
                        type:'boolean',
                        description:"Task status",
                        example:"true"
                    }
                }
            }
        }
    }
}
