import React, { useRef } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Transactions() {
	const [transactions, setTransactions] = React.useState([
		{
			id: 1,
			date: '2021-01-01',
			description: 'Golden Sun Bakery',
			amount: 10.99,
			transactionType: 'debit',
			category: 'groceries',
		},
		{
			id: 2,
			date: '2021-01-02',
			description: 'Golden Sun Bakery',
			amount: 20.99,
			transactionType: 'debit',
			category: 'groceries',
		},
		{
			id: 3,
			date: '2021-01-03',
			description: 'Golden Sun Bakery',
			amount: 30.99,
			transactionType: 'debit',
			category: 'groceries',
		},
		{
			id: 4,
			date: '2021-01-04',
			description: 'Golden Sun Bakery',
			amount: 40.99,
			transactionType: 'debit',
			category: 'groceries',
		},
		{
			id: 5,
			date: '2021-01-05',
			description: 'Golden Sun Bakery',
			amount: 50.99,
			transactionType: 'debit',
			category: 'groceries',
		},
		{
			id: 6,
			date: '2021-01-06',
			description: 'Golden Sun Bakery',
			amount: 60.99,
			transactionType: 'debit',
			category: 'groceries',
		},
	]);
	const [details, setDetails] = React.useState(false);
	const [open, setOpen] = React.useState(false);
	const buttonRef = useRef(null);

	let balance = '$2,082.79';
	return (
		<>
			<Navbar />
			<main className='main bg-dark'>
				<section className='account-details'>
					<h1>Argent Bank Checking (×8349)</h1>
					<h2>{balance}</h2>
					<h3>Availiable Balance</h3>
				</section>
				<section className='transactions'>
					<table className='table' cellspacing='0'>
						<thead className='table-header bg-dark'>
							<tr>
								<th></th>
								<th className='th'>Date</th>
								<th className='th'>Amount</th>
								<th className='th'>Balance</th>
								<th className='th'>Description</th>
							</tr>
						</thead>
						<tbody>
							{
								// map over the transactions array and return a table row for each transaction
								transactions.map((transaction) => {
									return (
										<>
											<tr className='tr'>
												<td>
													{!open ? (
														<FontAwesomeIcon icon={faChevronDown} onClick={() => setOpen(true)} />
													) : (
														<FontAwesomeIcon icon={faChevronUp} onClick={() => setOpen(!true)} />
													)}
												</td>
												<td>
													{
														// format the date to be more readable
														new Date(transaction.date).toLocaleDateString('en-US', {
															month: 'long',
															day: 'numeric',
															year: 'numeric',
														})
													}
												</td>
												<td>{transaction.description}</td>
												<td>{transaction.amount}</td>
												<td>{balance}</td>
											</tr>
											{open && <div>something</div>}
										</>
									);
								})
							}
						</tbody>
					</table>
				</section>
			</main>

			<Footer />
		</>
	);
}

export default Transactions;
