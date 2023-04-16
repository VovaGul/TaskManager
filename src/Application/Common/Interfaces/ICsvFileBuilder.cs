using TaskManager.Application.TodoLists.Queries.ExportTodos;

namespace TaskManager.Application.Common.Interfaces;

public interface ICsvFileBuilder
{
    byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
}
