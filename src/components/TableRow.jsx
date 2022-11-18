import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faPen, faPenFancy } from '@fortawesome/free-solid-svg-icons';

const TableRow = (props) => {
	const [open, setIsOpen] = React.useState(false);
	const dropdownRef = React.useRef(null);
	let transaction = props.transaction;
	let dateObj = transaction.date;
	// formate date to MM/DD/YYYY
	const nth = function (d) {
		if (d > 3 && d < 21) return 'th';
		switch (d % 10) {
			case 1:
				return 'st';
			case 2:
				return 'nd';
			case 3:
				return 'rd';
			default:
				return 'th';
		}
	};
	// month

	const formatDate = function (date) {
		let day = date.getDate();
		let month = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		][date.getMonth()];
		let year = date.getFullYear();
		return month + ' ' + day + nth(day) + ', ' + year;
	};

	dateObj = formatDate(new Date(dateObj.substring(0, 4), dateObj.substring(5, 7), dateObj.substring(8, 10)));

	return (
		<>
			<tr ref={dropdownRef}>
				<td>
					{open ? (
						<FontAwesomeIcon icon={faChevronUp} onClick={() => setIsOpen(!open)} className='icon' />
					) : (
						<FontAwesomeIcon icon={faChevronDown} onClick={() => setIsOpen(!open)} className='icon' />
					)}
					{dateObj}
				</td>
				<td>{transaction.description}</td>
				<td>${transaction.amount}</td>
				<td>{transaction.transactionType}</td>
			</tr>
			{open && (
				<div className='extras'>
					<p>Transaction Type: Eletronic</p>
					<p>
						Category:{' '}
						<select defaultValue='Food'>
							<option value='Food'>Food</option>
							<option value='groceries'>Groceries</option>
							<option value='entertainment'>Entertainment</option>
							<option value='shopping'>Shopping</option>
							<option value='travel'>Travel</option>
							<option value='other'>Other</option>
						</select>{' '}
						<FontAwesomeIcon icon={faPen} className='icon' />
					</p>
					<div className='editableDiv'>
						Notes: <p contentEditable='true'></p>
						<FontAwesomeIcon icon={faPen} className='icon' />
					</div>
				</div>
			)}
		</>
	);
};

export default TableRow;
