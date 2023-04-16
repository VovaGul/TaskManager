﻿using TaskManager.Application.Common.Interfaces;

namespace TaskManager.Infrastructure.Services;

public class DateTimeService : IDateTime
{
    public DateTime Now => DateTime.Now;
}
