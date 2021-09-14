
import './App.css';

function App() {
  const expenses =[
    { 
      id:'s1',
      title:'One Plus', 
      amount:299.98, 
      date:new Date(2019,2,28)
    },
    { 
      id:'s2',
      title:'Car Insurane',
      amount:294.67,
      date:new Date(2021,2,28)
    },
    { 
      id:'s3',
      title:'Laptop',
      amount:590.67, 
      date:new Date(2020,5,28)
    },
    { 
      id:'s3',
      title:'Desk',
      amount:294.67, 
      date:new Date(2021,8,1)
    }

  ];
  return (
    <>
    <div className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <Expenseitem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></Expenseitem>
    </div>
 <div className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem>
    </div>
    </>
 
  );
}

export default App;
