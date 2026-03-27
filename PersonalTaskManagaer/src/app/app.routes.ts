import { Routes } from '@angular/router';
import { Navi } from './Components/NavBarComponent/navi';
import { TaskList } from './Components/TaskListComponent/task-list';
import { TaskDetail } from './Components/TaskDetailComponent/task-detail';
import { TaskInfo } from './Components/TaskInfoComponent/task-info';
import { TaskAdd } from './Components/TaskAddComponent/task-add';
import { TaskEdit } from './Components/TaskEditComponent/task-edit';

export const routes: Routes = [
    {path: 'navi', component: Navi},
    {path: 'TaskListComponent', component: TaskList},
    {path: 'Add', component: TaskAdd },
    {path: 'task/:id',
        component: TaskDetail,
        children: [
            {path: 'info', component: TaskInfo},
            {path: 'edit', component: TaskEdit}
        ]
    


}
    



];
