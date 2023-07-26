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
                         }}>
                         <div>
                              <label>Date of Expense
                                   <select
                                        type='date'
                                        value={debit.dateOfExpense}
                                        name='dateOfExpense'
                                        onChange={handleChange}
                                        placeholder='dateOfExpense'>


                                   </select>
                              </label>
                              {'Payee'}
                              <select
                                   type='text'
                                   value={debit.payee}
                                   name='payee'
                                   onChange={handleChange}>
                                   <option value='Allen Sterling'>Allen Sterling</option>
                                   <option value='Allstar Health.'>Allstar Health.</option>
                                   <option value='Balance'>Balance</option>
                                   <option value='Bulk Apothecary'>Bulk Apothecary</option>
                                   <option value='Chemistrystore'>Chemistrystore</option>
                                   <option value='CVS'>CVS</option>
                                   <option value='Dipietros'>Dipietros</option>
                                   <option value='Dishwaser-Uncle Andy'>Dishwaser-Uncle Andy</option>
                                   <option value='dollar store'>dollar store</option>
                                   <option value='Freeze Dryer'>Freeze Dryer</option>
                                   <option value='Griffen Greenhouse'>Griffen Greenhouse</option>
                                   <option value='Handsink-rest equiment store'>Handsink-rest equiment store</option>
                                   <option value='Heat system for grow room'>Heat system for grow room</option>
                                   <option value='High Tech '>High Tech </option>
                                   <option value='home depo'>home depo</option>
                                   <option value='Home Depot'>Home Depot</option>
                                   <option value='Indendent power'>Indendent power</option>
                                   <option value='Jordan Farm'>Jordan Farm</option>
                                   <option value='labor cost-Rob Fogg'>labor cost-Rob Fogg</option>
                                   <option value='Leapin Lizards'>Leapin Lizards</option>
                                   <option value='Leroux Kitchen'>Leroux Kitchen</option>
                                   <option value='Lois'>Lois</option>
                                   <option value='lorann oils'>lorann oils</option>
                                   <option value='mountain Rose'>mountain Rose</option>
                                   <option value='Multiple vendors'>Multiple vendors</option>
                                   <option value='Napa'>Napa</option>
                                   <option value='Nolts Greenhouse'>Nolts Greenhouse</option>
                                   <option value='oakhill'>oakhill</option>
                                   <option value='Pharmaca'>Pharmaca</option>
                                   <option value='Post office'>Post office</option>
                                   <option value='Proverda lab'>Proverda lab</option>
                                   <option value='Renhui metal'>Renhui metal</option>
                                   <option value='shaws'>shaws</option>
                                   <option value='SJR Labs'>SJR Labs</option>
                                   <option value='Staples'>Staples</option>
                                   <option value='State of Maine'>State of Maine</option>
                                   <option value='State of Maine '>State of Maine </option>
                                   <option value='State of Mind'>State of Mind</option>
                                   <option value='Truffle made'>Truffle made</option>
                                   <option value='Uline'>Uline</option>
                                   <option value='Urban Garden'>Urban Garden</option>
                                   <option value='Vessel Services'>Vessel Services</option>
                                   <option value='zNatural'>zNatural</option>
                                   <option value='Grand Total'>Grand Total</option>


                              </select>

                            
                                   {"Description"}
                                   <input
                                        type='text'
                                        value={debit.description}
                                        name='description'
                                        onChange={handleChange}
                                        placeholder='Description' />
                          
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


                              {'Unit Measure'}
                              <select
                                   type='text'
                                   value={debit.unitMeasure}
                                   onChange={handleChange}>
                                   <option value="oz.">oz.</option>
                                   <option value="gal">gal</option>
                                   <option value="lb">lb</option>
                                   <option value="cubicYard">cubic yard</option>
                                   <option value="cubicFoot">cubic foot</option>
                                   <option value="each">each</option>
                                   <option value="other">other</option>
                              </select><br />

                              <label>
                                   Sub Total
                                   <input
                                   />

                              </label>
                              {'Sales Tax '}
                              <select
                                   value={debit.salesTax}
                                   onChange={handleChange}
                                   name="salesTax">
                                   <option value="5%">5%</option>
                                   <option value="8%">8%</option>
                                   <option value="0">0</option>
                              </select><br />

                              {'Shipping'}<input type='text' value={debit.shipping} name='shipping' onChange={handleChange} placeholder='Shipping' />

                              <label>Account<input type='text' value={debit.url} name='url' onChange={handleChange} placeholder='URL' /></label>

                              {'Sales Tax '}

                         </div>
                         <input className='button' type='submit' value='Create Debit' />
                    </form>
               </div>

          </>
     )
}
