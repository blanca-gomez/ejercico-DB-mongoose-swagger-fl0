// documentación de los diferentes endpoints
module.exports = {
    paths: {
      "/create": {
        post: {
          tags: ["Tasks"],
          description: "Create Task",
          operationId: "createTask",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Task created successfully",
            },
            500: {
              description: "Server error",
            },
          },
        },
      },
      "/": {
        get: {
          tags: ["Tasks"],
          description: "Get all tasks",
          operationId: "getTasks",
          parameters: [],
          responses: {
            200: {
              description: "Tasks retrieved successfully",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Task",
                  },
                },
              },
            },
            500: {
              description: "Server error",
            },
          },
        },
      },
      "/id/{_id}": { 
        get: { 
          tags: ["Tasks"],
          description: "Get a task by ID",
          operationId: "getTaskById",
          parameters: [
            {
              name: "_id",
              in: "path",
              required: true,
              schema: {
                type: "string",
              },
              description: "ID of the task to retrieve",
            },
          ],
          responses: {
            200: {
              description: "Task retrieved successfully",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Task",
                  },
                },
              },
            },
            404: {
              description: "Task not found",
            },
            500: {
              description: "Server error",
            },
          },
        },
        put: {
          tags: ["Tasks"],
          description: "Update a task",
          operationId: "updateTask",
          parameters: [
            {
              name: "_id",
              in: "path",
              required: true,
              schema: {
                type: "string",
              },
              description: "ID of the task to be updated",
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Task updated successfully",
            },
            500: {
              description: "Server error",
            },
          },
        },
        delete: {
          tags: ["Tasks"],
          description: "Delete a task by ID",
          operationId: "deleteTaskById",
          parameters: [
            {
              name: "_id",
              in: "path",
              required: true,
              schema: {
                type: "string",
              },
              description: "ID of the task to be deleted",
            },
          ],
          responses: {
            200: {
              description: "Task deleted successfully",
            },
            404: {
              description: "Task not found",
            },
            500: {
              description: "Server error",
            },
          },
        },
      },
    },
  };
  