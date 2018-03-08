import axios from 'axios';

export const FETCH_TASKS = 'FETCH_TASKS';

export function fetchTasks(tasks) {
    return {
        type: FETCH_TASKS,
        payload: tasks
    };
}