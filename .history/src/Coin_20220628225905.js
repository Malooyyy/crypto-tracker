import React from 'react'

const Coin = () => {
	return (
		<div className='cin-container'>
			<div className="coin-row">
				<div className="coin">
					<img src={image} alt="crypto" />
					<h1>{name}</h1>
					<p className='coin-symbol'>{Symbol}</p>
				</div>
			</div>
		</div>
	)
}

export default Coin