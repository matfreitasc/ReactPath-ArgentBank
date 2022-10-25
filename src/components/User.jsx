import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const User = () => {
	const [editName, setEditName] = React.useState(false);
	return (
		<>
			<Navbar />
			<main class='main bg-dark'>
				<div class='header'>
					<h1>
						Welcome back
						<br />
						Tony Jarvis!
					</h1>

					{editName ? (
						<form className='edit-form'>
							<div className='input-wrapper'>
								<input type='text' id='firstName' placeholder='Tony' />
								<label for='firstName' className='sr-only'>
									First Name
								</label>
							</div>
							<div className='input-wrapper'>
								<input type='text' id='lastName' placeholder='Jarvis' />
								<label for='lastName' className='sr-only'>
									Last Name
								</label>
							</div>

							<button onClick={console.log('saved')}>Save</button>
							<button onClick={() => setEditName(false)}>Cancel</button>
						</form>
					) : (
						<button class='edit-button' onClick={() => setEditName(!editName)}>
							Edit Name
						</button>
					)}
				</div>
				<h2 class='sr-only'>Accounts</h2>
				<section class='account'>
					<div class='account-content-wrapper'>
						<h3 class='account-title'>Argent Bank Checking (x8349)</h3>
						<p class='account-amount'>$2,082.79</p>
						<p class='account-amount-description'>Available Balance</p>
					</div>
					<div class='account-content-wrapper cta'>
						<button class='transaction-button'>View transactions</button>
					</div>
				</section>
				<section class='account'>
					<div class='account-content-wrapper'>
						<h3 class='account-title'>Argent Bank Savings (x6712)</h3>
						<p class='account-amount'>$10,928.42</p>
						<p class='account-amount-description'>Available Balance</p>
					</div>
					<div class='account-content-wrapper cta'>
						<button class='transaction-button'>View transactions</button>
					</div>
				</section>
				<section class='account'>
					<div class='account-content-wrapper'>
						<h3 class='account-title'>Argent Bank Credit Card (x8349)</h3>
						<p class='account-amount'>$184.30</p>
						<p class='account-amount-description'>Current Balance</p>
					</div>
					<div class='account-content-wrapper cta'>
						<button class='transaction-button'>View transactions</button>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default User;
