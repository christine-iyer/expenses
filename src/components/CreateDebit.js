export default function CreateDebit({
     createDebit,
     debit,
     handleChange
}) {
     return (
          <>
               <h2>Create A Debit</h2>
               <div className='container'>
                    <form
                         className='form'
                         onSubmit={(e) => {
                              e.preventDefault()
                              createDebit()
                         }}
                    >
                         <div>
                              <label>Date of Expense<input type='date' value={debit.dateOfExpense} name='dateOfExpense' onChange={handleChange} placeholder='dateOfExpense' /></label>
                              <label>Payee<input type='text' value={debit.payee} name='payee' onChange={handleChange} placeholder='Payee' /></label>

                              <label>
                                   Description
                                   <input
                                        type='text'
                                        value={debit.description}
                                        name='description'
                                        onChange={handleChange}
                                        placeholder='Description' />
                              </label>

                              <label>
                                   Used For...
                                   <input
                                        type='text'
                                        value={debit.usedFor}
                                        name='usedFor'
                                        onChange={handleChange}
                                        placeholder='Used For' />
                              </label>
                              <label>
                                   Num Units
                                   <input
                                        type='text'
                                        value={debit.unitMeasure}
                                        name='unitMeasure'
                                        onChange={handleChange}
                                        placeholder='Unit Measure' />
                              </label>

                              <label>
                                   Unit Measure
                                   <select
                                        type='text'
                                        value={debit.unitMeasure}
                                        name='unitMeasure' onChange={handleChange} />
                              </label>

                              <label>
                                   Sub Total
                                   <input 
                                    /></label>
                              <label>Tax<input type='text' value={debit.url} name='url' onChange={handleChange} placeholder='URL' /></label>
                              <label>Shipping<input type='text' value={debit.title} name='title' onChange={handleChange} placeholder='Title' /></label>
                              <label>Account<input type='text' value={debit.url} name='url' onChange={handleChange} placeholder='URL' /></label>
                              <label>Barter<input type='text' value={debit.title} name='title' onChange={handleChange} placeholder='Title' /></label>
                         </div>
                         <input className='button' type='submit' value='Create Debit' />
                    </form>
               </div>

          </>
     )
}
