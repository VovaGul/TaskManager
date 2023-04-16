using TaskManager.Application.Common.Mappings;
using TaskManager.Domain.Entities;

namespace TaskManager.Application.TodoLists.Queries.ExportTodos;

public class TodoItemRecord : IMapFrom<TodoItem>
{
    public string? Title { get; set; }

    public bool Done { get; set; }
}
