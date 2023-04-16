using System.Globalization;
using TaskManager.Application.TodoLists.Queries.ExportTodos;
using CsvHelper.Configuration;

namespace TaskManager.Infrastructure.Files.Maps;

public class TodoItemRecordMap : ClassMap<TodoItemRecord>
{
    public TodoItemRecordMap()
    {
        AutoMap(CultureInfo.InvariantCulture);

        Map(m => m.Done).Convert(c => c.Value.Done ? "Yes" : "No");
    }
}
