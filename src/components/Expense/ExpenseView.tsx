import React, { FC } from 'react'
import { Grid, } from '@mui/material';
import { Expense } from '../../redux/types';

type ExpenseViewProps = Omit<Expense, "isEdit">

const ExpenseView: FC<ExpenseViewProps> = (props) => {
    return (
        <Grid container direction="column">
            <Grid item>
                Наименование
            </Grid>
            <Grid item>
                Категория
            </Grid>
            <Grid item>
                Сумма
            </Grid>
            <hr />
        </Grid>
    )
}

export default ExpenseView