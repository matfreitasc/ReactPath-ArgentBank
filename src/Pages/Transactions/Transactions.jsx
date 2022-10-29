import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

function Transactions() {
	const [transactions, setTransactions] = React.useState([
		{
			id: 1,
			date: '2021-01-01',
			description: 'Transaction 1',
			amount: 10.99,
			transactionType: 'debit',
			category: 'groceries',
		},
		{
			id: 2,
			date: '2021-01-02',
			description: 'Transaction 2',
			amount: 20.99,
			transactionType: 'debit',
			category: 'groceries',
		},
		{
			id: 3,
			date: '2021-01-03',
			description: 'Transaction 3',
			amount: 30.99,
			transactionType: 'debit',
			category: 'groceries',
		},
		{
			id: 4,
			date: '2021-01-04',
			description: 'Transaction 4',
			amount: 40.99,
			transactionType: 'debit',
			category: 'groceries',
		},
		{
			id: 5,
			date: '2021-01-05',
			description: 'Transaction 5',
			amount: 50.99,
			transactionType: 'debit',
			category: 'groceries',
		},
		{
			id: 6,
			date: '2021-01-06',
			description: 'Transaction 6',
			amount: 60.99,
			transactionType: 'debit',
			category: 'groceries',
		},
	]);
	const [details, setDetails] = React.useState(false);
	return (
		<>
			<Navbar />
			<main className='main bg-dark'>
				<section className='account-details'>
					<h1>Account number</h1>
					<h2>Current Ammout</h2>
					<p>Availiable Balance</p>
				</section>
				<section className='transactions'>
					{transactions.map((transaction) => {
						return (
							<div className='transaction'>
								{details ? <i class='fa-solid fa-chevron-down'></i> : <i class='fa-solid fa-chevron-up'></i>}
								<p>{transaction.date}</p>
								<p>{transaction.description}</p>
								<p>{transaction.amount}</p>
								<p>{transaction.balance}</p>
							</div>
						);
					})}
				</section>
			</main>

			<Footer />
		</>
	);
}

export default Transactions;
