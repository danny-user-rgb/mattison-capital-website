/* Dollar Matters - Main JS */

// ---- Alpha grid ----
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function buildAlphaGrid(containerId, page) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  LETTERS.concat(['#']).forEach(letter => {
    const btn = document.createElement('a');
    btn.className = 'alpha-btn';
    btn.textContent = letter;
    btn.href = page
      ? `glossary.html#letter-${letter}`
      : `glossary.html#letter-${letter}`;
    grid.appendChild(btn);
  });
}
buildAlphaGrid('alpha-grid', false);
buildAlphaGrid('alpha-grid-page', true);

// ---- Glossary search ----
const TERMS = [
  { term: 'Annual Percentage Rate (APR)', def: 'The yearly interest rate charged on borrowed money, including fees.', letter: 'A' },
  { term: 'Annual Percentage Yield (APY)', def: 'The real rate of return on a savings account, factoring in compound interest.', letter: 'A' },
  { term: 'Asset', def: 'Anything you own that has monetary value: cash, property, investments.', letter: 'A' },
  { term: 'Amortization', def: 'The process of paying off a loan through regular scheduled payments over time.', letter: 'A' },
  { term: 'Budget', def: 'A plan for how you will spend and save your money each month.', letter: 'B' },
  { term: 'Balance', def: 'The amount of money in a bank account or owed on a credit card.', letter: 'B' },
  { term: 'Bankruptcy', def: 'A legal process that helps people who cannot repay debts get relief from some or all of what they owe.', letter: 'B' },
  { term: 'Bond', def: 'A loan you give to a government or company in exchange for interest payments.', letter: 'B' },
  { term: 'Compound Interest', def: 'Interest calculated on both the initial principal and the accumulated interest, making your money grow faster over time.', letter: 'C' },
  { term: 'Credit', def: 'The ability to borrow money with the agreement to pay it back later.', letter: 'C' },
  { term: 'Credit Score', def: 'A number (300–850) that represents how likely you are to repay debts. Higher is better.', letter: 'C' },
  { term: 'Credit Report', def: 'A detailed record of your credit history, including loans, credit cards, and payment history.', letter: 'C' },
  { term: 'Credit Union', def: 'A member-owned financial cooperative that offers banking services, often with lower fees than traditional banks.', letter: 'C' },
  { term: 'Collateral', def: 'An asset pledged as security for a loan. If you default, the lender can take the collateral.', letter: 'C' },
  { term: 'Default', def: 'Failure to repay a loan as agreed. Can severely damage your credit score.', letter: 'D' },
  { term: 'Debt', def: 'Money owed to another person or institution.', letter: 'D' },
  { term: 'Deductible', def: 'The amount you pay out-of-pocket before insurance kicks in.', letter: 'D' },
  { term: 'Direct Deposit', def: 'Electronic transfer of your paycheck directly into your bank account.', letter: 'D' },
  { term: 'Diversification', def: 'Spreading investments across different assets to reduce risk.', letter: 'D' },
  { term: 'Emergency Fund', def: 'Savings set aside specifically for unexpected expenses, typically 3–6 months of living costs.', letter: 'E' },
  { term: 'Equity', def: 'The value of an asset minus any debts owed against it. In a home, it\'s your ownership stake.', letter: 'E' },
  { term: 'FDIC', def: 'Federal Deposit Insurance Corporation: insures bank deposits up to $250,000 per depositor.', letter: 'F' },
  { term: 'FICO Score', def: 'The most widely used credit scoring model, ranging from 300 to 850.', letter: 'F' },
  { term: 'Fixed Rate', def: 'An interest rate that stays the same for the life of a loan.', letter: 'F' },
  { term: 'Foreclosure', def: 'The legal process by which a lender takes ownership of a property when the borrower fails to make mortgage payments.', letter: 'F' },
  { term: 'Gross Income', def: 'Your total earnings before any taxes or deductions are taken out.', letter: 'G' },
  { term: 'High-Yield Savings Account', def: 'A savings account that offers a higher interest rate than a traditional savings account.', letter: 'H' },
  { term: 'Income', def: 'Money received in exchange for work, investments, or other sources.', letter: 'I' },
  { term: 'Inflation', def: 'The rate at which the general level of prices rises, reducing purchasing power over time.', letter: 'I' },
  { term: 'Interest', def: 'The cost of borrowing money, or the reward for saving it, expressed as a percentage.', letter: 'I' },
  { term: 'IRA (Individual Retirement Account)', def: 'A tax-advantaged account designed to help you save for retirement.', letter: 'I' },
  { term: 'Liability', def: 'A debt or financial obligation you owe to someone else.', letter: 'L' },
  { term: 'Liquidity', def: 'How easily an asset can be converted to cash without losing value.', letter: 'L' },
  { term: 'Minimum Payment', def: 'The smallest amount you can pay on a credit card bill to keep the account in good standing.', letter: 'M' },
  { term: 'Mortgage', def: 'A loan used to purchase real estate, where the property itself serves as collateral.', letter: 'M' },
  { term: 'Mutual Fund', def: 'An investment vehicle that pools money from many investors to buy a diversified portfolio of stocks or bonds.', letter: 'M' },
  { term: 'Net Income', def: 'Your take-home pay after taxes and other deductions have been subtracted.', letter: 'N' },
  { term: 'Net Worth', def: 'The total value of everything you own minus everything you owe.', letter: 'N' },
  { term: 'Overdraft', def: 'When you spend more money than you have in your account, resulting in a negative balance and often a fee.', letter: 'O' },
  { term: 'Payday Loan', def: 'A short-term, high-interest loan typically due on your next payday. Often predatory; APRs can exceed 400%.', letter: 'P' },
  { term: 'Principal', def: 'The original amount of money borrowed or invested, before interest.', letter: 'P' },
  { term: 'Predatory Lending', def: 'Unfair or deceptive loan practices that target vulnerable borrowers with excessive fees and impossible terms.', letter: 'P' },
  { term: 'Roth IRA', def: 'A retirement account funded with after-tax money; qualified withdrawals in retirement are tax-free.', letter: 'R' },
  { term: 'Saving', def: 'Setting aside a portion of income regularly for future use or emergencies.', letter: 'S' },
  { term: 'Simple Interest', def: 'Interest calculated only on the original principal, not on accumulated interest.', letter: 'S' },
  { term: 'Student Loan', def: 'Money borrowed to pay for higher education that must be repaid with interest after graduation.', letter: 'S' },
  { term: 'Stock', def: 'A share of ownership in a company. Stockholders may earn dividends and benefit if the company grows.', letter: 'S' },
  { term: 'Tax Bracket', def: 'Income ranges that determine what percentage of your income you pay in federal taxes.', letter: 'T' },
  { term: 'Tax Deduction', def: 'An expense you can subtract from your taxable income, reducing the amount of taxes you owe.', letter: 'T' },
  { term: 'W-2', def: 'A tax form employers send showing your total wages and taxes withheld for the year.', letter: 'W' },
  { term: 'W-4', def: 'A form you fill out for your employer to tell them how much tax to withhold from each paycheck.', letter: 'W' },
  { term: 'Yield', def: 'The earnings generated on an investment, expressed as a percentage of the investment\'s cost.', letter: 'Y' },

  // ---- 300 additional terms ----

  // A
  { term: 'Accrued Interest', def: 'Interest that has been earned or charged but not yet paid or received.', letter: 'A' },
  { term: 'Adjustable-Rate Mortgage (ARM)', def: 'A mortgage with an interest rate that changes periodically based on a market index, which can cause payments to rise or fall.', letter: 'A' },
  { term: 'Arbitrage', def: 'Buying and selling the same asset in different markets simultaneously to profit from price differences.', letter: 'A' },
  { term: 'Asset Allocation', def: 'The strategy of dividing investments among different asset categories like stocks, bonds, and cash to manage risk.', letter: 'A' },
  { term: 'Audit', def: 'An official examination of financial records by the IRS or an accountant to verify their accuracy.', letter: 'A' },
  { term: 'Auto Insurance', def: 'Coverage that protects you financially if your vehicle is involved in an accident, stolen, or damaged.', letter: 'A' },
  { term: 'Automatic Bill Pay', def: 'A service that automatically pays recurring bills from your bank account on set dates each month.', letter: 'A' },
  { term: 'Account Statement', def: 'A periodic summary from your bank or lender showing all transactions during a specific period.', letter: 'A' },
  { term: 'Accounts Payable', def: 'Money a business owes to suppliers or vendors for goods and services already received.', letter: 'A' },
  { term: 'Accounts Receivable', def: 'Money owed to a business by its customers for goods or services already delivered.', letter: 'A' },
  { term: 'Annuity', def: 'A financial product sold by insurance companies that pays out a fixed income stream, often used in retirement.', letter: 'A' },
  { term: 'Appreciation', def: 'An increase in the value of an asset over time due to market conditions or improvements.', letter: 'A' },
  { term: 'Ask Price', def: 'The lowest price a seller is willing to accept for a security or asset.', letter: 'A' },
  { term: 'Angel Investor', def: 'A wealthy individual who provides funding to startups in their early stages in exchange for equity or convertible debt.', letter: 'A' },
  { term: 'After-Tax Income', def: 'The amount of money remaining after all applicable taxes have been deducted from gross income.', letter: 'A' },
  { term: 'Accrual Accounting', def: 'A method of accounting that records revenues and expenses when they occur, not when cash is received or paid.', letter: 'A' },
  { term: 'Active Management', def: 'An investment strategy where fund managers actively select investments trying to outperform a market index.', letter: 'A' },
  { term: 'Accumulation Phase', def: 'The period during an investor\'s life when they are building savings and investments, typically their working years.', letter: 'A' },
  { term: 'Allowance', def: 'A fixed sum of money given regularly, or an allocation within a budget for a specific spending category.', letter: 'A' },
  { term: 'Accrued Benefit', def: 'Retirement benefits you have earned based on years of service and salary under a defined benefit pension plan.', letter: 'A' },

  // B
  { term: 'Balance Sheet', def: 'A financial statement showing what a person or business owns (assets), owes (liabilities), and the difference (equity).', letter: 'B' },
  { term: 'Bear Market', def: 'A market condition where prices fall 20% or more from recent highs, often reflecting widespread pessimism.', letter: 'B' },
  { term: 'Beneficiary', def: 'A person designated to receive money or assets from an insurance policy, will, or retirement account after someone passes.', letter: 'B' },
  { term: 'Bid Price', def: 'The highest price a buyer is willing to pay for a security at a given moment.', letter: 'B' },
  { term: 'Blue-Chip Stock', def: 'Shares of a large, well-established company with a long history of stable earnings and dividend payments.', letter: 'B' },
  { term: 'Bridge Loan', def: 'A short-term loan used to cover immediate expenses or a gap in financing until longer-term funding is arranged.', letter: 'B' },
  { term: 'Broker', def: 'A licensed professional or firm that executes buy and sell orders for securities on behalf of clients.', letter: 'B' },
  { term: 'Bull Market', def: 'A market condition characterized by rising prices and investor optimism, typically a 20% or more gain from a recent low.', letter: 'B' },
  { term: 'Business Credit', def: 'Credit established in a business\'s name to finance operations, separate from the owner\'s personal credit history.', letter: 'B' },
  { term: 'Buy-and-Hold', def: 'A passive investing strategy of purchasing securities and holding them long-term regardless of market price fluctuations.', letter: 'B' },
  { term: 'Balance Transfer', def: 'Moving debt from one credit card to another, typically to take advantage of a lower or promotional interest rate.', letter: 'B' },
  { term: 'Balloon Payment', def: 'A large lump-sum payment due at the end of a loan term, much larger than the regular periodic payments.', letter: 'B' },
  { term: 'Bank Statement', def: 'A monthly document from your bank listing all account transactions, deposits, withdrawals, and fees.', letter: 'B' },
  { term: 'Basis Point', def: 'One one-hundredth of a percent (0.01%), used to describe small changes in interest rates and investment returns.', letter: 'B' },
  { term: 'Break-Even Point', def: 'The point at which total revenue equals total costs, resulting in neither a profit nor a loss.', letter: 'B' },
  { term: 'Beneficiary Designation', def: 'Naming specific individuals to receive assets from retirement accounts or life insurance policies, bypassing probate.', letter: 'B' },

  // C
  { term: 'Capital', def: 'Money or assets available for investment, starting a business, or generating more wealth.', letter: 'C' },
  { term: 'Capital Gains', def: 'The profit earned when you sell an asset for more than you originally paid for it.', letter: 'C' },
  { term: 'Capital Gains Tax', def: 'A tax on the profit from selling an investment or property, with lower rates for assets held longer than one year.', letter: 'C' },
  { term: 'Cash Advance', def: 'Borrowing cash against your credit card limit, usually at a higher interest rate with fees charged from day one.', letter: 'C' },
  { term: 'Cash Flow', def: 'The movement of money in and out of your accounts; positive cash flow means you earn more than you spend.', letter: 'C' },
  { term: 'Certificate of Deposit (CD)', def: 'A savings product that locks your money for a fixed term at a fixed interest rate, offering higher returns than a regular savings account.', letter: 'C' },
  { term: 'Checking Account', def: 'A bank account designed for everyday transactions like paying bills, making purchases, and withdrawing cash.', letter: 'C' },
  { term: 'Co-Signer', def: 'A person who agrees to share legal responsibility for a loan, helping a borrower with limited or poor credit qualify.', letter: 'C' },
  { term: 'COBRA', def: 'A federal law allowing you to continue employer-sponsored health insurance for a limited time after leaving a job, though you pay the full premium.', letter: 'C' },
  { term: 'Commercial Bank', def: 'A for-profit financial institution that accepts deposits, makes loans, and offers basic financial services to individuals and businesses.', letter: 'C' },
  { term: 'Cost Basis', def: 'The original price you paid for an investment, used to calculate capital gains or losses when you sell it.', letter: 'C' },
  { term: 'Cost of Living', def: 'The amount of money needed to cover basic expenses like housing, food, and healthcare in a specific location.', letter: 'C' },
  { term: 'Credit Bureau', def: 'An agency that collects and maintains consumer credit information; the three major ones are Equifax, Experian, and TransUnion.', letter: 'C' },
  { term: 'Credit Card', def: 'A payment card issued by a lender that lets you borrow up to a limit, with interest charged on unpaid balances.', letter: 'C' },
  { term: 'Credit Counseling', def: 'Professional guidance to help you manage debt, create a budget, and develop a plan to improve your financial situation.', letter: 'C' },
  { term: 'Credit Freeze', def: 'A security measure that restricts lenders from accessing your credit report, preventing new accounts from being opened in your name.', letter: 'C' },
  { term: 'Credit Limit', def: 'The maximum amount you are permitted to borrow on a credit card or line of credit at any given time.', letter: 'C' },
  { term: 'Credit Utilization', def: 'The percentage of your available credit currently in use; keeping it below 30% is recommended for a healthy credit score.', letter: 'C' },
  { term: 'Cash Equivalent', def: 'Short-term, highly liquid investments that can quickly be converted to a known cash amount, like money market funds.', letter: 'C' },
  { term: 'Charitable Deduction', def: 'A reduction in taxable income for donations made to qualifying nonprofit or religious organizations.', letter: 'C' },
  { term: 'Closing Costs', def: 'Fees and expenses beyond the property price paid when finalizing a real estate purchase, typically 2–5% of the loan amount.', letter: 'C' },
  { term: 'Compound Annual Growth Rate (CAGR)', def: 'The rate at which an investment grows each year over a specified time period, assuming profits are reinvested.', letter: 'C' },
  { term: 'Consumer Price Index (CPI)', def: 'A measure tracking the average change in prices paid by consumers for a basket of goods and services over time.', letter: 'C' },
  { term: 'Certificate of Title', def: 'A legal document proving ownership of a vehicle or piece of real estate.', letter: 'C' },
  { term: 'Convertible Bond', def: 'A corporate bond that can be converted into a set number of company shares at the bondholder\'s discretion.', letter: 'C' },

  // D
  { term: 'Day Trading', def: 'Buying and selling financial assets within the same trading day to profit from short-term price movements.', letter: 'D' },
  { term: 'Debt Consolidation', def: 'Combining multiple debts into a single loan, often with a lower interest rate or a simpler repayment schedule.', letter: 'D' },
  { term: 'Debt-to-Income Ratio (DTI)', def: 'The percentage of your gross monthly income that goes toward paying debts; lenders use it to evaluate loan applications.', letter: 'D' },
  { term: 'Deferred Compensation', def: 'Income earned in one period but received later, often used by employees to delay taxes on a portion of their salary.', letter: 'D' },
  { term: 'Deflation', def: 'A general decrease in prices across the economy, which can signal reduced demand and economic weakness.', letter: 'D' },
  { term: 'Depreciation', def: 'The gradual reduction in the value of an asset over time due to wear, age, or obsolescence.', letter: 'D' },
  { term: 'Derivative', def: 'A financial contract whose value is based on the performance of an underlying asset like a stock, bond, or commodity.', letter: 'D' },
  { term: 'Disability Insurance', def: 'Coverage that replaces a portion of your income if you become unable to work due to illness or injury.', letter: 'D' },
  { term: 'Discount Rate', def: 'The interest rate the Federal Reserve charges banks for short-term borrowing, influencing rates throughout the economy.', letter: 'D' },
  { term: 'Dividend', def: 'A portion of a company\'s profits paid to shareholders, typically on a quarterly basis, in cash or additional shares.', letter: 'D' },
  { term: 'Dollar-Cost Averaging', def: 'Investing a fixed dollar amount at regular intervals regardless of price, reducing the impact of market volatility over time.', letter: 'D' },
  { term: 'Down Payment', def: 'An upfront payment made when buying a home or car, with the remaining balance financed through a loan.', letter: 'D' },
  { term: 'Due Diligence', def: 'The thorough research and verification process done before making a significant financial decision or investment.', letter: 'D' },
  { term: 'Debt-to-Equity Ratio', def: 'A measure comparing a company\'s total debt to its shareholders\' equity, indicating how much it relies on borrowing.', letter: 'D' },
  { term: 'Distribution', def: 'A payment made from a retirement account or investment fund to its account holder or shareholders.', letter: 'D' },

  // E
  { term: 'Earned Income Tax Credit (EITC)', def: 'A refundable federal tax credit for low- to moderate-income workers that can reduce or eliminate taxes owed.', letter: 'E' },
  { term: 'Earnest Money', def: 'A deposit made to show a buyer\'s serious intent to purchase a home, typically applied to the down payment at closing.', letter: 'E' },
  { term: 'Employee Stock Option', def: 'The right granted to an employee to purchase company stock at a set price, usually as part of a compensation package.', letter: 'E' },
  { term: 'Employer Match', def: 'A contribution your employer adds to your retirement account that matches a percentage of what you contribute yourself.', letter: 'E' },
  { term: 'Estate', def: 'All the assets, property, and liabilities belonging to a person, often referenced in the context of death and inheritance.', letter: 'E' },
  { term: 'Estate Planning', def: 'The process of organizing finances and legal documents to ensure your assets are distributed according to your wishes after death.', letter: 'E' },
  { term: 'Exchange-Traded Fund (ETF)', def: 'A fund that tracks an index, commodity, or asset basket and trades on a stock exchange throughout the day like a stock.', letter: 'E' },
  { term: 'Executor', def: 'A person named in a will to administer the deceased\'s estate and carry out their final wishes.', letter: 'E' },
  { term: 'Expense Ratio', def: 'The annual fee charged by a mutual fund or ETF to cover operating expenses, expressed as a percentage of assets.', letter: 'E' },
  { term: 'Escrow', def: 'A neutral third-party arrangement where money or documents are held until specific conditions of a transaction are met.', letter: 'E' },
  { term: 'Equity Financing', def: 'Raising money for a business by selling ownership shares rather than taking on debt.', letter: 'E' },
  { term: 'Expected Return', def: 'The average return anticipated on an investment based on historical data or probability analysis.', letter: 'E' },
  { term: 'Expense Account', def: 'A fund or budget provided by an employer to cover legitimate business costs like travel, meals, or supplies.', letter: 'E' },
  { term: 'Extension (Tax)', def: 'Additional time granted by the IRS to file a tax return, though any taxes owed are still due by the original deadline.', letter: 'E' },
  { term: 'Exponential Growth', def: 'Growth that increases at an accelerating rate over time, such as when compound interest continually builds on itself.', letter: 'E' },

  // F
  { term: 'Federal Reserve', def: 'The central bank of the United States, responsible for monetary policy, regulating banks, and maintaining financial stability.', letter: 'F' },
  { term: 'Fee-Only Advisor', def: 'A financial planner who charges flat fees or hourly rates and does not earn commissions on the products they recommend.', letter: 'F' },
  { term: 'Financial Aid', def: 'Money provided to students to help pay for higher education, including grants, scholarships, work-study programs, and loans.', letter: 'F' },
  { term: 'Fiscal Year', def: 'A 12-month period used for financial planning and reporting that may not align with the standard calendar year.', letter: 'F' },
  { term: 'Fixed Expense', def: 'A recurring cost that stays the same each month regardless of usage, such as rent, car payments, or insurance premiums.', letter: 'F' },
  { term: 'Flexible Spending Account (FSA)', def: 'A pre-tax employer benefit account used to pay for qualified healthcare or dependent care expenses; unused funds may be forfeited at year-end.', letter: 'F' },
  { term: 'Forbearance', def: 'A temporary reduction or pause of loan payments granted by a lender during periods of financial hardship.', letter: 'F' },
  { term: '401(k)', def: 'An employer-sponsored retirement savings account funded with pre-tax income, with taxes deferred until withdrawal in retirement.', letter: 'F' },
  { term: '403(b)', def: 'A tax-advantaged retirement plan available to employees of nonprofits, public schools, and government agencies, similar to a 401(k).', letter: 'F' },
  { term: 'Form 1099', def: 'An IRS tax form used to report income from non-employment sources such as freelance work, interest, dividends, or rental income.', letter: 'F' },
  { term: 'Frugality', def: 'The practice of being careful and economical with money, avoiding waste, and prioritizing long-term financial well-being.', letter: 'F' },
  { term: 'Fund Manager', def: 'A professional responsible for making investment decisions and managing the portfolio of a mutual fund or ETF.', letter: 'F' },

  // G
  { term: 'Grace Period', def: 'A window of time after a payment due date during which you can pay without incurring a late fee or penalty.', letter: 'G' },
  { term: 'Grant', def: 'Money awarded by a government, organization, or institution that does not need to be repaid.', letter: 'G' },
  { term: 'Gross Domestic Product (GDP)', def: 'The total monetary value of all goods and services produced within a country in a specific time period.', letter: 'G' },
  { term: 'Guarantor', def: 'A person or entity that agrees to repay a loan or meet an obligation if the primary borrower fails to do so.', letter: 'G' },
  { term: 'Gift Tax', def: 'A federal tax on transfers of money or property to another person exceeding the annual gift exclusion limit.', letter: 'G' },
  { term: 'Growth Stock', def: 'A share in a company expected to grow at a significantly faster rate than average, typically reinvesting profits rather than paying dividends.', letter: 'G' },
  { term: 'Good Debt', def: 'Borrowing that can increase your earning potential or net worth over time, such as a mortgage or a student loan for a high-paying career.', letter: 'G' },
  { term: 'Good Faith Estimate', def: 'A document from a mortgage lender outlining the estimated costs and terms associated with a home loan application.', letter: 'G' },

  // H
  { term: 'Health Insurance', def: 'A contract that covers medical costs including doctor visits, hospital stays, and prescriptions in exchange for a monthly premium.', letter: 'H' },
  { term: 'Health Savings Account (HSA)', def: 'A tax-advantaged account for medical expenses available to people enrolled in a high-deductible health plan; unused funds roll over each year.', letter: 'H' },
  { term: 'Home Equity Line of Credit (HELOC)', def: 'A revolving line of credit secured by your home\'s equity, allowing you to borrow as needed up to a set limit.', letter: 'H' },
  { term: 'Home Equity Loan', def: 'A fixed-rate loan that lets you borrow a lump sum against the equity you\'ve built up in your home.', letter: 'H' },
  { term: 'Homeowners Insurance', def: 'Coverage that protects your home and personal belongings from damage, theft, and liability claims.', letter: 'H' },
  { term: 'Hyperinflation', def: 'An extremely rapid and out-of-control increase in prices, often defined as monthly inflation exceeding 50%.', letter: 'H' },
  { term: 'Hard Inquiry', def: 'A credit check initiated by a lender when you apply for credit, which can temporarily lower your credit score by a few points.', letter: 'H' },
  { term: 'Hedge Fund', def: 'A private investment fund that uses sophisticated strategies to maximize returns for wealthy investors, with minimal regulatory oversight.', letter: 'H' },
  { term: 'Holding Period', def: 'The length of time you own an investment before selling it; determines whether gains are taxed as short-term or long-term.', letter: 'H' },
  { term: 'Hard Money Loan', def: 'A short-term loan secured by real estate, typically from private investors, often used when traditional financing is unavailable.', letter: 'H' },

  // I
  { term: 'Index Fund', def: 'A type of investment fund designed to replicate the performance of a specific market index, offering broad diversification at low cost.', letter: 'I' },
  { term: 'Installment Loan', def: 'A loan repaid in fixed, scheduled payments over a set period, such as an auto loan or personal loan.', letter: 'I' },
  { term: 'Insurance Premium', def: 'The regular payment made to an insurance company to maintain coverage under a policy.', letter: 'I' },
  { term: 'Interest Rate', def: 'The percentage charged by a lender on a loan, or paid by a bank on savings, typically expressed on an annual basis.', letter: 'I' },
  { term: 'Investment', def: 'Allocating money to assets such as stocks, bonds, or real estate with the expectation of earning a financial return.', letter: 'I' },
  { term: 'Intestate', def: 'Dying without a valid will, which results in the state determining how your assets are distributed.', letter: 'I' },
  { term: 'Income Tax', def: 'A tax levied by federal and state governments on wages, salaries, and other forms of earned or investment income.', letter: 'I' },
  { term: 'Financial Index', def: 'A benchmark that measures the performance of a group of assets, such as the S&P 500 or the Dow Jones Industrial Average.', letter: 'I' },
  { term: 'Inflation Rate', def: 'The percentage increase in the general price level of goods and services over a specific period, typically reported annually.', letter: 'I' },
  { term: 'In-Network Provider', def: 'A healthcare provider who has contracted with your insurance company to offer services at reduced negotiated rates.', letter: 'I' },
  { term: 'Investment-Grade Bond', def: 'A bond with a credit rating of BBB or higher, indicating a lower risk of default and generally paying lower interest.', letter: 'I' },
  { term: 'IPO (Initial Public Offering)', def: 'The first sale of a company\'s shares to the public, allowing it to raise capital by listing on a stock exchange.', letter: 'I' },
  { term: 'Irrevocable Trust', def: 'A trust that cannot be modified or dissolved without court approval, offering strong asset protection and tax benefits.', letter: 'I' },
  { term: 'Itemized Deduction', def: 'Eligible expenses listed individually on your tax return to reduce taxable income, as an alternative to the standard deduction.', letter: 'I' },
  { term: 'Interest-Only Loan', def: 'A loan where payments initially cover only interest, deferring principal repayment to a later date, resulting in lower early payments.', letter: 'I' },

  // J
  { term: 'Joint Account', def: 'A bank or investment account shared by two or more people, each having equal ownership and access to the funds.', letter: 'J' },
  { term: 'Jumbo Loan', def: 'A mortgage that exceeds the conforming loan limits set by Fannie Mae and Freddie Mac, typically requiring stricter qualification standards.', letter: 'J' },
  { term: 'Joint Tenancy', def: 'A form of shared property ownership where two or more people hold equal shares with the right of survivorship.', letter: 'J' },
  { term: 'Judgment', def: 'A court order requiring a debtor to pay a specified amount to a creditor, which can lead to wage garnishment or asset seizure.', letter: 'J' },

  // K
  { term: 'Keogh Plan', def: 'A tax-deferred retirement savings plan designed for self-employed individuals and small business owners.', letter: 'K' },
  { term: 'Key Person Insurance', def: 'Life or disability insurance purchased by a business on a crucial employee to protect against financial losses if that person dies or becomes disabled.', letter: 'K' },

  // L
  { term: 'Late Fee', def: 'A penalty charge added to your balance when a payment is not received by the due date.', letter: 'L' },
  { term: 'Lease', def: 'A contract to rent property or equipment for a specified time in exchange for regular payments, without transferring ownership.', letter: 'L' },
  { term: 'Lender', def: 'A bank, credit union, or individual that provides money to borrowers with the expectation it will be repaid with interest.', letter: 'L' },
  { term: 'Lien', def: 'A legal claim against a property used as security for a debt, allowing the lienholder to take the property if the debt is not paid.', letter: 'L' },
  { term: 'Life Insurance', def: 'A contract that pays a lump sum to a named beneficiary upon the death of the insured person.', letter: 'L' },
  { term: 'Loan Origination Fee', def: 'A charge by a lender to cover the cost of processing and underwriting a new loan application.', letter: 'L' },
  { term: 'Loan-to-Value Ratio (LTV)', def: 'The ratio comparing a loan amount to the appraised value of the property; a lower LTV typically means better loan terms.', letter: 'L' },
  { term: 'Line of Credit', def: 'A flexible loan arrangement allowing you to borrow up to a set limit, repay it, and borrow again as needed.', letter: 'L' },
  { term: 'Liquidation', def: 'The process of converting assets into cash, or selling a company\'s assets to pay off debts when going out of business.', letter: 'L' },
  { term: 'Long-Term Care Insurance', def: 'Coverage for extended care services such as nursing home, assisted living, or home health aide costs due to chronic illness or disability.', letter: 'L' },
  { term: 'Long-Term Debt', def: 'Loans and financial obligations with a repayment schedule of more than one year, such as mortgages or bonds.', letter: 'L' },
  { term: 'Loss Leader', def: 'A product or service priced below cost to attract customers, with the expectation they will also purchase other profitable items.', letter: 'L' },

  // M
  { term: 'Margin', def: 'Borrowing money from a broker to buy investments, using your existing portfolio as collateral; amplifies both gains and losses.', letter: 'M' },
  { term: 'Market Capitalization', def: 'The total market value of a company\'s outstanding shares, calculated by multiplying the share price by total shares outstanding.', letter: 'M' },
  { term: 'Market Order', def: 'An instruction to buy or sell a security immediately at the best available current market price.', letter: 'M' },
  { term: 'Medicare', def: 'A federal health insurance program covering people age 65 and older and certain individuals with disabilities.', letter: 'M' },
  { term: 'Money Market Account', def: 'A savings account that offers a higher interest rate and sometimes check-writing privileges, usually with a minimum balance requirement.', letter: 'M' },
  { term: 'Money Order', def: 'A prepaid payment instrument that works like a check, often used by people without a bank account for secure transactions.', letter: 'M' },
  { term: 'Municipal Bond', def: 'A debt security issued by a state or local government to fund public projects; interest is often exempt from federal income tax.', letter: 'M' },
  { term: 'Marginal Tax Rate', def: 'The rate applied to the last dollar of your taxable income, which increases as income rises through tax brackets.', letter: 'M' },
  { term: 'Medical Debt', def: 'Money owed to healthcare providers for medical services received; one of the leading causes of personal bankruptcy in the U.S.', letter: 'M' },
  { term: 'Micro-Investing', def: 'Investing very small amounts of money, often through apps that automatically invest spare change from everyday purchases.', letter: 'M' },
  { term: 'Market Risk', def: 'The possibility that an investment will lose value due to broad economic factors such as recessions, interest rate changes, or market crashes.', letter: 'M' },
  { term: 'Monthly Statement', def: 'A summary sent by your bank or creditor each month showing all transactions, fees, and current balance for that period.', letter: 'M' },

  // N
  { term: 'Negative Amortization', def: 'A situation where loan payments are insufficient to cover interest, causing the unpaid interest to be added to the principal balance.', letter: 'N' },
  { term: 'NSF Fee', def: 'A Non-Sufficient Funds fee charged by your bank when a check or electronic payment cannot be processed due to lack of funds.', letter: 'N' },
  { term: 'No-Load Fund', def: 'A mutual fund sold without a sales commission or load fee, meaning your full investment goes directly into the fund.', letter: 'N' },
  { term: 'Nominal Interest Rate', def: 'The stated interest rate on a loan or investment before adjusting for inflation or compounding effects.', letter: 'N' },
  { term: 'Non-Deductible Contribution', def: 'Money deposited into a retirement account using after-tax dollars that cannot be deducted from your taxable income.', letter: 'N' },
  { term: 'Nonprofit Organization', def: 'An entity that operates for charitable, educational, or social purposes and reinvests any surplus back into its mission rather than distributing profits.', letter: 'N' },

  // O
  { term: 'Option', def: 'A contract giving the holder the right, but not the obligation, to buy or sell an asset at a set price before a specific date.', letter: 'O' },
  { term: 'Out-of-Pocket Maximum', def: 'The most you will pay for covered healthcare expenses in a plan year; after reaching this limit, your insurance covers 100% of covered costs.', letter: 'O' },
  { term: 'Over-the-Counter (OTC)', def: 'Securities that are traded directly between two parties rather than through a formal stock exchange.', letter: 'O' },
  { term: 'Opportunity Cost', def: 'The value of the best alternative you give up when making a financial decision or investment choice.', letter: 'O' },
  { term: 'Origination Fee', def: 'A one-time fee charged by a lender at the start of a loan to cover administrative and processing costs.', letter: 'O' },
  { term: 'Operating Expenses', def: 'The day-to-day costs incurred to run a business or maintain an investment property, excluding capital expenditures.', letter: 'O' },

  // P
  { term: 'Passive Income', def: 'Earnings from sources requiring little ongoing effort, such as rental income, dividends, or royalties.', letter: 'P' },
  { term: 'Pension', def: 'An employer-funded retirement plan that guarantees a fixed monthly income to employees after they retire, based on salary and years of service.', letter: 'P' },
  { term: 'Personal Loan', def: 'An unsecured loan from a bank or lender for any purpose, repaid in fixed monthly installments at an agreed interest rate.', letter: 'P' },
  { term: 'PMI (Private Mortgage Insurance)', def: 'Insurance required by lenders when a homebuyer\'s down payment is less than 20%, protecting the lender if the borrower defaults.', letter: 'P' },
  { term: 'Portfolio', def: 'A collection of financial assets such as stocks, bonds, real estate, and cash held by an individual or institution.', letter: 'P' },
  { term: 'Power of Attorney', def: 'A legal document authorizing one person to make financial or legal decisions on behalf of another.', letter: 'P' },
  { term: 'Pre-Approval', def: 'A lender\'s preliminary assessment indicating you qualify for a loan up to a specific amount, based on a credit check and financial review.', letter: 'P' },
  { term: 'Premium', def: 'The amount you pay for an insurance policy, usually charged monthly, quarterly, or annually to maintain coverage.', letter: 'P' },
  { term: 'Probate', def: 'The court-supervised legal process of validating a will and distributing a deceased person\'s estate.', letter: 'P' },
  { term: 'Profit', def: 'The financial gain remaining after all costs and expenses have been subtracted from total revenue.', letter: 'P' },
  { term: 'Profit Margin', def: 'The percentage of revenue that remains as profit after all costs are deducted; a key measure of business financial health.', letter: 'P' },
  { term: 'Payroll Tax', def: 'Taxes automatically withheld from employees\' wages to fund Social Security and Medicare programs.', letter: 'P' },
  { term: 'Pay Stub', def: 'A document provided with each paycheck showing your gross earnings, deductions, taxes withheld, and net pay.', letter: 'P' },
  { term: 'Penalty', def: 'An extra charge imposed for violating the terms of a financial agreement, such as early withdrawal from a CD or a late loan payment.', letter: 'P' },
  { term: 'Portfolio Rebalancing', def: 'Adjusting the mix of assets in your investment portfolio back to your target allocation after market movements shift the balance.', letter: 'P' },

  // Q
  { term: 'Qualified Dividend', def: 'A dividend that meets IRS requirements to be taxed at the lower long-term capital gains rate rather than as ordinary income.', letter: 'Q' },
  { term: 'Quarterly Tax', def: 'Estimated income tax payments made four times a year by self-employed individuals and others who don\'t have taxes withheld from a paycheck.', letter: 'Q' },
  { term: 'Qualified Plan', def: 'An employer-sponsored retirement savings plan that meets IRS requirements, allowing both employer and employee contributions to be tax-advantaged.', letter: 'Q' },
  { term: 'Quote', def: 'The most recent price at which a security was bought or sold in the market.', letter: 'Q' },

  // R
  { term: 'Rate of Return', def: 'The net gain or loss on an investment over a specific period, expressed as a percentage of the original investment.', letter: 'R' },
  { term: 'Real Estate Investment Trust (REIT)', def: 'A company that owns income-generating real estate and is required to distribute at least 90% of its taxable income as dividends.', letter: 'R' },
  { term: 'Real Rate of Return', def: 'The rate of return on an investment after adjusting for inflation, showing the true increase in purchasing power.', letter: 'R' },
  { term: 'Recession', def: 'A significant decline in economic activity lasting at least two consecutive quarters, marked by rising unemployment and reduced spending.', letter: 'R' },
  { term: 'Refinancing', def: 'Replacing an existing loan with a new one at a lower interest rate or better terms to reduce monthly payments or total costs.', letter: 'R' },
  { term: 'Repossession', def: 'A lender\'s legal right to reclaim property, such as a car, when the borrower fails to make the required payments.', letter: 'R' },
  { term: 'Required Minimum Distribution (RMD)', def: 'The minimum amount the IRS requires you to withdraw annually from tax-deferred retirement accounts starting at a certain age.', letter: 'R' },
  { term: 'Revenue', def: 'The total income earned by a business from selling goods or services before any expenses are deducted.', letter: 'R' },
  { term: 'Revolving Credit', def: 'A flexible type of credit that allows repeated borrowing up to a set limit, with balances that can be paid off and borrowed again.', letter: 'R' },
  { term: 'Risk Tolerance', def: 'Your personal ability and willingness to handle fluctuations in the value of your investments in pursuit of higher returns.', letter: 'R' },
  { term: 'Rollover', def: 'Moving funds from one retirement account to another without triggering taxes or penalties, such as from a 401(k) to an IRA.', letter: 'R' },
  { term: 'Rent', def: 'Regular payments made to a landlord in exchange for the right to occupy a home, apartment, or commercial space.', letter: 'R' },
  { term: 'Renters Insurance', def: 'Affordable insurance for tenants that covers personal belongings, liability, and additional living expenses if your rental becomes uninhabitable.', letter: 'R' },
  { term: 'Reward Credit Card', def: 'A credit card that earns points, airline miles, or cash back on purchases, offering valuable perks when paid off monthly.', letter: 'R' },

  // S
  { term: 'Savings Bond', def: 'A low-risk, government-issued bond that earns interest over time and is backed by the full faith and credit of the U.S. government.', letter: 'S' },
  { term: 'Secured Credit Card', def: 'A credit card backed by a cash deposit that serves as your credit limit, designed to help build or rebuild credit history.', letter: 'S' },
  { term: 'Secured Loan', def: 'A loan backed by collateral: an asset the lender can seize if you fail to repay.', letter: 'S' },
  { term: 'Self-Employment Tax', def: 'Social Security and Medicare taxes paid entirely by self-employed individuals, equivalent to the combined employer and employee portions.', letter: 'S' },
  { term: 'SEP IRA', def: 'A Simplified Employee Pension IRA designed for self-employed individuals and small business owners, allowing higher contribution limits than a traditional IRA.', letter: 'S' },
  { term: 'Social Security', def: 'A federal government program providing retirement, disability, and survivor benefits funded through payroll taxes.', letter: 'S' },
  { term: 'Standard Deduction', def: 'A fixed amount that reduces your taxable income, set by the IRS each year, used as an alternative to itemizing individual deductions.', letter: 'S' },
  { term: 'Subsidized Loan', def: 'A federal student loan where the government pays the interest while the borrower is enrolled in school at least half-time.', letter: 'S' },
  { term: 'Surplus', def: 'The amount remaining when income exceeds expenses, which can be saved, invested, or used to pay down debt.', letter: 'S' },
  { term: 'Subprime Loan', def: 'A loan offered to borrowers with poor or limited credit histories at higher interest rates to compensate the lender for greater risk.', letter: 'S' },
  { term: 'S&P 500', def: 'A stock market index tracking the performance of 500 of the largest publicly traded U.S. companies, widely used as a market benchmark.', letter: 'S' },
  { term: 'Spending Tracker', def: 'A tool, app, or spreadsheet used to record and categorize all purchases to monitor and improve spending habits.', letter: 'S' },
  { term: 'Soft Inquiry', def: 'A credit check that does not affect your credit score, such as checking your own credit or a background check by an employer.', letter: 'S' },
  { term: 'SIMPLE IRA', def: 'A Savings Incentive Match Plan for Employees IRA, a retirement plan for small businesses allowing contributions from both employees and employers.', letter: 'S' },
  { term: 'Side Hustle', def: 'A secondary job or income-generating activity pursued alongside primary employment to earn extra money.', letter: 'S' },

  // T
  { term: 'Taxable Income', def: 'The portion of your gross income subject to tax after all eligible deductions and exemptions have been subtracted.', letter: 'T' },
  { term: 'Tax Credit', def: 'A dollar-for-dollar reduction in the amount of tax you owe, more valuable than a deduction of the same amount.', letter: 'T' },
  { term: 'Tax Exempt', def: 'Income, an organization, or a transaction that is not subject to taxation under applicable federal or state law.', letter: 'T' },
  { term: 'Tax Filing Status', def: 'A category chosen when filing taxes, such as single, married filing jointly, or head of household, that affects your rates and deductions.', letter: 'T' },
  { term: 'Tax-Loss Harvesting', def: 'The strategy of selling investments that have declined in value to offset capital gains and reduce your overall tax bill.', letter: 'T' },
  { term: 'Tax Refund', def: 'Money returned to you by the IRS when you have overpaid taxes throughout the year through withholding or estimated payments.', letter: 'T' },
  { term: 'Tax Return', def: 'The official form submitted to the IRS each year reporting your income, deductions, credits, and the amount of tax owed or refunded.', letter: 'T' },
  { term: 'Term Life Insurance', def: 'Life insurance that provides coverage for a specific period, paying a death benefit only if the insured passes away during that term.', letter: 'T' },
  { term: 'Treasury Bill (T-Bill)', def: 'A short-term U.S. government debt security that matures in one year or less, considered one of the safest investments available.', letter: 'T' },
  { term: 'Treasury Bond', def: 'A long-term U.S. government debt security with a maturity of 20 to 30 years, paying fixed interest every six months.', letter: 'T' },
  { term: 'Treasury Note', def: 'A medium-term U.S. government debt security that matures in 2 to 10 years and pays fixed interest every six months.', letter: 'T' },
  { term: 'Trust', def: 'A legal arrangement where a trustee holds and manages assets for the benefit of designated beneficiaries.', letter: 'T' },
  { term: 'Total Return', def: 'The complete return on an investment including both price appreciation and any income from dividends or interest.', letter: 'T' },
  { term: 'Tax Withholding', def: 'The portion of an employee\'s wages automatically sent to the IRS by their employer to cover estimated income taxes.', letter: 'T' },

  // U
  { term: 'Underwriting', def: 'The process by which a lender or insurer evaluates the risk of providing a loan or coverage to an applicant.', letter: 'U' },
  { term: 'Unemployment Insurance', def: 'A state-run government program providing temporary income to workers who have lost their jobs through no fault of their own.', letter: 'U' },
  { term: 'Unsubsidized Loan', def: 'A federal student loan where interest begins accruing immediately upon disbursement, including while the borrower is still in school.', letter: 'U' },
  { term: 'Unsecured Loan', def: 'A loan not backed by collateral, approved based solely on the borrower\'s creditworthiness, typically at a higher interest rate.', letter: 'U' },
  { term: 'Unit Investment Trust (UIT)', def: 'A fixed portfolio of securities sold in units to investors, with a predetermined termination date when assets are liquidated.', letter: 'U' },
  { term: 'Utilization Rate', def: 'The percentage of your total available credit currently in use; a key factor in calculating your credit score.', letter: 'U' },

  // V
  { term: 'Variable Expense', def: 'A cost that changes from month to month based on usage or behavior, such as groceries, entertainment, or utility bills.', letter: 'V' },
  { term: 'Variable Rate', def: 'An interest rate that fluctuates over time based on changes in a reference rate like the prime rate or SOFR.', letter: 'V' },
  { term: 'Vesting', def: 'The process by which an employee gains full ownership of employer contributions to a retirement or stock plan over time.', letter: 'V' },
  { term: 'Value Investing', def: 'An investment strategy focused on purchasing stocks that appear undervalued relative to their intrinsic or book value.', letter: 'V' },
  { term: 'Venture Capital', def: 'Funding provided to early-stage, high-potential companies in exchange for equity, typically by specialized investment firms.', letter: 'V' },
  { term: 'Volatility', def: 'The degree to which an investment\'s price fluctuates over time; higher volatility implies greater potential risk and reward.', letter: 'V' },

  // W
  { term: 'Wage', def: 'Monetary compensation paid to workers based on hours worked or output produced, as opposed to a fixed salary.', letter: 'W' },
  { term: 'Wealth', def: 'An abundance of valuable assets and resources, typically measured as a person\'s total net worth.', letter: 'W' },
  { term: 'Whole Life Insurance', def: 'Permanent life insurance providing lifelong coverage and a savings component called cash value that grows over time.', letter: 'W' },
  { term: 'Will', def: 'A legal document specifying how a person\'s assets and property should be distributed after their death.', letter: 'W' },
  { term: 'Windfall', def: 'A sudden, unexpected large financial gain such as an inheritance, lottery win, or large bonus.', letter: 'W' },
  { term: 'Wire Transfer', def: 'An electronic transfer of funds between bank accounts, often used for large or international transactions.', letter: 'W' },

  // Y
  { term: 'Year-to-Date (YTD)', def: 'The period from the start of the current year to the current date, used to track financial performance or earnings so far this year.', letter: 'Y' },

  // Z
  { term: 'Zero-Based Budgeting', def: 'A budgeting method where every dollar of income is assigned a specific purpose, so total income minus total allocations equals zero.', letter: 'Z' },
  { term: 'Zero-Coupon Bond', def: 'A bond that pays no periodic interest but is sold at a steep discount and redeems at full face value at maturity.', letter: 'Z' },
  { term: 'Zero-Sum Game', def: 'A situation where one participant\'s gain is exactly offset by another\'s loss, common in options and futures trading.', letter: 'Z' },
  { term: 'Zone of Support', def: 'A price range where a security has historically found buyers, preventing it from falling further; used in technical analysis.', letter: 'Z' },

  // Additional terms to reach 300+
  { term: 'Annualized Return', def: 'The rate of return on an investment scaled to a one-year period, making returns of different timeframes easy to compare.', letter: 'A' },
  { term: 'Accrued Liability', def: 'An expense that has been incurred but not yet paid, recorded as a liability on a balance sheet.', letter: 'A' },
  { term: 'Asset Management', def: 'The professional management of financial assets on behalf of individuals or institutions to meet investment goals.', letter: 'A' },
  { term: 'Business Plan', def: 'A written document outlining a business\'s goals, strategies, financial projections, and operational plans.', letter: 'B' },
  { term: 'Bounced Check', def: 'A check returned unpaid by a bank because the account lacks sufficient funds, resulting in NSF fees for the account holder.', letter: 'B' },
  { term: 'Cash Reserve', def: 'Money kept in a liquid account specifically for unexpected expenses, separate from everyday spending funds.', letter: 'C' },
  { term: 'Credit Monitoring', def: 'A service that alerts you to changes in your credit report, helping you detect fraud or identity theft early.', letter: 'C' },
  { term: 'Co-Borrower', def: 'A person who jointly applies for a loan and shares equal legal responsibility for repaying it with the primary borrower.', letter: 'C' },
  { term: 'Delinquency', def: 'Being overdue on a required debt payment, which can result in fees, higher interest rates, and credit score damage.', letter: 'D' },
  { term: 'Debt Settlement', def: 'Negotiating with a creditor to accept less than the full amount owed to resolve a debt, typically damaging your credit score.', letter: 'D' },
  { term: 'Exchange Rate', def: 'The rate at which one country\'s currency can be converted into another\'s, affecting the cost of international purchases and travel.', letter: 'E' },
  { term: 'Early Withdrawal Penalty', def: 'A fee charged for taking money out of a CD or tax-advantaged retirement account before its maturity date or qualifying age.', letter: 'E' },
  { term: 'Financial Planner', def: 'A certified professional who helps individuals create a comprehensive strategy for managing money, saving, investing, and retirement.', letter: 'F' },
  { term: 'Float', def: 'The brief period of time between when a payment is initiated and when it is officially processed and cleared by the bank.', letter: 'F' },
  { term: 'Garnishment', def: 'A legal process allowing a creditor to collect money owed by intercepting it directly from the debtor\'s wages or bank account.', letter: 'G' },
  { term: 'Hard Asset', def: 'A tangible, physical asset with intrinsic value such as real estate, precious metals, or commodities.', letter: 'H' },
  { term: 'Housing Ratio', def: 'The percentage of gross monthly income spent on housing costs; lenders typically prefer this to be below 28%.', letter: 'H' },
  { term: 'Income Statement', def: 'A financial document showing revenues, expenses, and net income or loss over a specific period, also called a profit and loss statement.', letter: 'I' },
  { term: 'Insolvency', def: 'A financial condition in which a person or business cannot meet their debt obligations as they come due.', letter: 'I' },
  { term: 'Landlord', def: 'A person or entity that owns rental property and leases it to tenants in exchange for regular rent payments.', letter: 'L' },
  { term: 'Leverage', def: 'Using borrowed capital to increase the potential return of an investment, which also amplifies potential losses.', letter: 'L' },
  { term: 'Minimum Wage', def: 'The lowest hourly pay rate that employers are legally permitted to pay most workers under federal or state law.', letter: 'M' },
  { term: 'Median Income', def: 'The midpoint of household income distribution, where half of earners make more and half make less; a common economic benchmark.', letter: 'M' },
  { term: 'Net Asset Value (NAV)', def: 'The per-share value of a mutual fund calculated by dividing total assets minus liabilities by the number of outstanding shares.', letter: 'N' },
  { term: 'Negotiation', def: 'The process of discussing financial terms with a creditor, lender, or employer to reach a mutually acceptable outcome.', letter: 'N' },
  { term: 'Outstanding Balance', def: 'The total amount currently owed on a loan or credit account, including principal, accrued interest, and any fees.', letter: 'O' },
  { term: 'Per Diem', def: 'A daily allowance provided by an employer to cover meals and lodging expenses while an employee travels for work.', letter: 'P' },
  { term: 'Prepayment Penalty', def: 'A fee some lenders charge when a borrower pays off a loan balance earlier than the agreed schedule.', letter: 'P' },
  { term: 'Return on Investment (ROI)', def: 'A performance measure expressing the profit earned relative to the cost of an investment, usually shown as a percentage.', letter: 'R' },
  { term: 'Risk-Adjusted Return', def: 'A measure of investment return that accounts for the amount of risk taken to achieve it, helping compare investments fairly.', letter: 'R' },
  { term: 'Socially Responsible Investing (SRI)', def: 'An investment strategy that considers both financial return and a company\'s social, environmental, and governance practices.', letter: 'S' },
  { term: 'Solvency', def: 'The ability of a person or business to meet all long-term financial obligations and continue operating into the future.', letter: 'S' },
  { term: 'Taxable Event', def: 'Any transaction or action that triggers a tax obligation, such as selling an investment, receiving dividends, or withdrawing from a retirement account.', letter: 'T' },
  { term: 'Tenants in Common', def: 'A property co-ownership arrangement where two or more people hold potentially unequal shares with no automatic right of survivorship.', letter: 'T' },
  { term: 'Valuation', def: 'The analytical process of determining the present or projected worth of an asset, company, or investment.', letter: 'V' },
  { term: 'Wealth Management', def: 'A comprehensive financial advisory service that combines investment management, tax planning, estate planning, and retirement strategies.', letter: 'W' },
  { term: 'Zoning', def: 'Government regulations that determine how land and buildings in specific areas can be used, affecting real estate value and investment decisions.', letter: 'Z' },
];

// Search on index page
const searchInput = document.getElementById('glossary-search');
const searchSuggestions = document.getElementById('search-suggestions');

if (searchInput) {
  searchInput.addEventListener('input', function () {
    const q = this.value.trim().toLowerCase();
    if (!q) {
      searchSuggestions.innerHTML = '';
      searchSuggestions.classList.remove('active');
      return;
    }
    const matches = TERMS.filter(t => t.term.toLowerCase().includes(q)).slice(0, 6);
    if (!matches.length) {
      searchSuggestions.innerHTML = '<div class="suggestion-item" style="color:#9aa5b4">No results found</div>';
    } else {
      searchSuggestions.innerHTML = matches.map(m => {
        const highlighted = m.term.replace(new RegExp(`(${q})`, 'gi'), '<strong>$1</strong>');
        return `<a class="suggestion-item" href="glossary.html#letter-${m.letter}">${highlighted}</a>`;
      }).join('');
    }
    searchSuggestions.classList.add('active');
  });

  document.addEventListener('click', function (e) {
    if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
      searchSuggestions.classList.remove('active');
    }
  });
}

// ---- Header search overlay ----
const searchBtn = document.getElementById('search-btn');
const searchOverlay = document.getElementById('search-overlay');
const searchOverlayClose = document.getElementById('search-overlay-close');
const searchOverlayInput = document.getElementById('search-overlay-input');
const searchClearBtn = document.getElementById('search-clear-btn');

// Inject results container into overlay
let overlayResults = null;
if (searchOverlay) {
  overlayResults = document.createElement('div');
  overlayResults.className = 'search-overlay-results';
  overlayResults.id = 'search-overlay-results';
  searchOverlay.appendChild(overlayResults);
}

function runOverlaySearch(q) {
  if (!overlayResults) return;
  const query = (q || '').trim().toLowerCase();
  if (!query) {
    overlayResults.innerHTML = '';
    overlayResults.classList.remove('active');
    return;
  }
  const matches = TERMS.filter(t =>
    t.term.toLowerCase().includes(query) || t.def.toLowerCase().includes(query)
  ).slice(0, 8);

  if (!matches.length) {
    overlayResults.innerHTML = '<div class="overlay-no-results">No financial terms found for that search.</div>';
  } else {
    overlayResults.innerHTML = matches.map(m => {
      const termHighlighted = m.term.replace(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<strong>$1</strong>');
      const defHighlighted = m.def.replace(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<strong>$1</strong>');
      return `<a class="overlay-result-item" href="glossary.html#letter-${m.letter}">` +
        `<span class="overlay-result-term">${termHighlighted}</span>` +
        `<span class="overlay-result-def">${defHighlighted}</span>` +
        `</a>`;
    }).join('');
  }
  overlayResults.classList.add('active');
}

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.toggle('active');
    if (searchOverlay.classList.contains('active')) {
      searchOverlayInput.focus();
    }
  });
}
if (searchOverlayClose) {
  searchOverlayClose.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
    if (searchOverlayInput) searchOverlayInput.value = '';
    if (searchClearBtn) searchClearBtn.classList.remove('visible');
    if (overlayResults) {
      overlayResults.innerHTML = '';
      overlayResults.classList.remove('active');
    }
  });
}
if (searchOverlayInput && searchClearBtn) {
  searchOverlayInput.addEventListener('input', function () {
    searchClearBtn.classList.toggle('visible', this.value.length > 0);
    runOverlaySearch(this.value);
  });
  searchOverlayInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      runOverlaySearch(this.value);
    }
  });
  searchClearBtn.addEventListener('click', function () {
    searchOverlayInput.value = '';
    searchClearBtn.classList.remove('visible');
    searchOverlayInput.focus();
    if (overlayResults) {
      overlayResults.innerHTML = '';
      overlayResults.classList.remove('active');
    }
  });
}

// ---- Mobile hamburger + quick-link tiles ----
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');
const siteHeader = document.getElementById('site-header');
if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamburger.classList.toggle('open');
    if (siteHeader) siteHeader.classList.toggle('nav-open');

    // Inject quick-link tiles on first open
    if (mainNav.classList.contains('open') && !document.getElementById('mobile-quick-links')) {
      const tiles = document.createElement('div');
      tiles.id = 'mobile-quick-links';
      tiles.className = 'mobile-quick-links';

      const links = [
        {
          href: 'volunteer.html',
          text: 'Volunteer',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>`
        },
        {
          href: 'glossary.html',
          text: 'Glossary',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>`
        },
        {
          href: 'schools.html',
          text: 'Request Workshop',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>`
        },
        {
          href: 'contact.html',
          text: 'Contact',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>`
        }
      ];

      links.forEach(link => {
        const a = document.createElement('a');
        a.className = 'mobile-quick-tile';
        a.href = link.href;
        a.innerHTML = link.svg + `<span>${link.text}</span>`;
        tiles.appendChild(a);
      });

      mainNav.insertBefore(tiles, mainNav.firstChild);
    }
  });
}

// ---- Dropdown keyboard ----
document.querySelectorAll('.has-dropdown').forEach(item => {
  const btn = item.querySelector('.nav-link');
  if (btn) {
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('force-open');
      document.querySelectorAll('.has-dropdown').forEach(el => {
        el.classList.remove('force-open');
        el.classList.remove('force-closed');
      });
      if (!isOpen) {
        item.classList.add('force-open');
      } else {
        item.classList.add('force-closed');
        btn.blur();
      }
    });
  }
  item.addEventListener('mouseleave', () => {
    item.classList.remove('force-closed');
  });
});
document.addEventListener('click', e => {
  if (!e.target.closest('.has-dropdown')) {
    document.querySelectorAll('.has-dropdown').forEach(el => {
      el.classList.remove('force-open');
      el.classList.remove('force-closed');
    });
  }
});

const WEB3FORMS_KEY = 'cc4bf580-9ec6-4357-b563-cd7bcfb39859';

// ---- Contact / general form submission ----
async function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const originalText = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: form.dataset.subject || 'Dollar Matters Form Submission',
        ...data
      })
    });

    const result = await response.json().catch(() => ({}));
    if (!result.success) throw new Error(result.message || 'Submission failed');

    const successMessage = form.dataset.success || 'Message sent! We\'ll be in touch soon.';
    btn.textContent = successMessage;
    btn.style.background = '#1a7a4a';
    btn.style.borderColor = '#1a7a4a';
  } catch (err) {
    btn.textContent = 'Error sending. Please try again.';
    btn.style.background = '#c62828';
    btn.style.borderColor = '#c62828';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
    }, 3000);
  }
}

// Attach to any forms with data-formsubmit attribute
document.querySelectorAll('form[data-formsubmit]').forEach(form => {
  form.addEventListener('submit', handleFormSubmit);
});

// ---- Newsletter form ----
async function handleNewsletterSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const input = form.querySelector('input[type="email"], input[type="text"]');
  const btn = form.querySelector('button');

  const originalText = btn.textContent;
  btn.textContent = 'Subscribing...';
  btn.disabled = true;

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: 'Newsletter Signup - Dollar Matters',
        email: input ? input.value : '',
        source: 'Newsletter Footer'
      })
    });

    const result = await response.json().catch(() => ({}));
    if (!result.success) throw new Error(result.message || 'Submission failed');

    btn.textContent = 'Subscribed!';
    if (input) input.value = '';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 3000);
  } catch (err) {
    btn.textContent = 'Try again';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 3000);
  }
}

// Attach newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', handleNewsletterSubmit);
}

// ---- Glossary page: build terms ----
function buildGlossaryPage() {
  const container = document.getElementById('glossary-terms-container');
  if (!container) return;

  const grouped = {};
  TERMS.forEach(t => {
    if (!grouped[t.letter]) grouped[t.letter] = [];
    grouped[t.letter].push(t);
  });

  const sortedLetters = Object.keys(grouped).sort();
  sortedLetters.forEach(letter => {
    const section = document.createElement('div');
    section.className = 'glossary-letter-section';
    section.id = `letter-${letter}`;

    const heading = document.createElement('div');
    heading.className = 'glossary-letter-heading';
    heading.textContent = letter;
    section.appendChild(heading);

    grouped[letter].forEach(item => {
      const termEl = document.createElement('div');
      termEl.className = 'glossary-term';
      termEl.innerHTML = `
        <div class="glossary-term-name">${item.term}</div>
        <div class="glossary-term-def">${item.def}</div>
      `;
      section.appendChild(termEl);
    });

    container.appendChild(section);
  });
}
buildGlossaryPage();

// ---- Glossary page search ----
const glossaryPageSearch = document.getElementById('glossary-page-search');
if (glossaryPageSearch) {
  glossaryPageSearch.addEventListener('input', function () {
    const q = this.value.trim().toLowerCase();
    document.querySelectorAll('.glossary-term').forEach(termEl => {
      const name = termEl.querySelector('.glossary-term-name').textContent.toLowerCase();
      const def = termEl.querySelector('.glossary-term-def').textContent.toLowerCase();
      termEl.style.display = (!q || name.includes(q) || def.includes(q)) ? '' : 'none';
    });
    document.querySelectorAll('.glossary-letter-section').forEach(section => {
      const visible = [...section.querySelectorAll('.glossary-term')].some(t => t.style.display !== 'none');
      section.style.display = visible ? '' : 'none';
    });
  });
}


// ---- Language selector & translations ----
const PAGE_TRANSLATIONS = {
  es: {
    // Navbar
    'What We Do': 'Qué Hacemos',
    'Financial Library': 'Biblioteca Financiera',
    'For Schools & Partners': 'Para Escuelas y Socios',
    'About': 'Acerca de',
    'Get Involved': 'Participa',
    'Get involved': 'Participa',
    // Dropdown - What We Do
    'Our Programs': 'Nuestros Programas',
    'Financial Topics We Teach': 'Temas Financieros que Enseñamos',
    'Volunteer with Us': 'Voluntariado con Nosotros',
    'Our Impact': 'Nuestro Impacto',
    'Empowering the next generation': 'Empoderando a la próxima generación',
    "From high school workshops to community sessions in Miami and the surrounding area, Dollar Matters brings peer-led financial education where it's needed most.": 'Desde talleres en secundaria hasta sesiones comunitarias en Miami y sus alrededores, Dollar Matters lleva educación financiera entre pares donde más se necesita.',
    'Volunteer today →': 'Voluntariado hoy →',
    // Dropdown - Financial Library
    'Finance Glossary A–Z': 'Glosario Financiero A–Z',
    'Topic Guides': 'Guías por Tema',
    'Tools & Calculators': 'Herramientas y Calculadoras',
    'Free Resources': 'Recursos Gratuitos',
    'Your financial knowledge hub': 'Tu centro de conocimiento financiero',
    'Access our growing library of guides, glossaries, and tools, all free, all designed for real-world use.': 'Accede a nuestra creciente biblioteca de guías, glosarios y herramientas, todas gratuitas, todas diseñadas para uso en el mundo real.',
    'Browse the glossary →': 'Explorar el glosario →',
    // Dropdown - For Schools & Partners
    'Bring Us to Your School': 'Llévanos a Tu Escuela',
    'Community Centers': 'Centros Comunitarios',
    'Partner With Us': 'Asóciate con Nosotros',
    'We come to you, free & fully prepared': 'Vamos a donde tú estás, gratis y completamente preparados',
    'Our trained volunteers bring workshops directly to your school or community center at no cost to you.': 'Nuestros voluntarios capacitados llevan talleres directamente a tu escuela o centro comunitario sin ningún costo para ti.',
    'Request a workshop →': 'Solicitar un taller →',
    // Dropdown - About
    'About Dollar Matters': 'Acerca de Dollar Matters',
    'Our Team': 'Nuestro Equipo',
    'Contact Us': 'Contáctenos',
    'Our Story': 'Nuestra Historia',
    'Student-led, community-driven': 'Liderado por estudiantes, impulsado por la comunidad',
    'Dollar Matters was founded by students who believe financial literacy is a right, not a privilege. Based in Miami, FL, we serve the greater South Florida area. Learn what drives us.': 'Dollar Matters fue fundado por estudiantes que creen que la educación financiera es un derecho, no un privilegio. Con sede en Miami, FL, servimos al área metropolitana del sur de Florida. Conoce lo que nos motiva.',
    'Our story →': 'Nuestra historia →',
    // Hero
    'Financial Literacy': 'Educación Financiera',
    'for Everyone.': 'para Todos.',
    'Learn how we make an impact →': 'Aprende cómo generamos impacto →',
    // Glossary finder
    'Find financial terms by first letter': 'Encuentra términos financieros por letra',
    'Search financial terms': 'Buscar términos financieros',
    // Value prop
    'Knowledge starts here.': 'El conocimiento comienza aquí.',
    'The right answers, the first time': 'Las respuestas correctas, desde el principio',
    'Financial mistakes can follow you for decades. Our trained student volunteers make sure young people understand money before they make the decisions that count.': 'Los errores financieros pueden seguirte durante décadas. Nuestros voluntarios estudiantes capacitados se aseguran de que los jóvenes entiendan el dinero antes de tomar las decisiones importantes.',
    'Free for every student': 'Gratis para todos los estudiantes',
    'Dollar Matters is 100% free for schools and community centers. We believe zip code should never determine financial know-how.': 'Dollar Matters es 100% gratuito para escuelas y centros comunitarios. Creemos que el código postal nunca debe determinar el conocimiento financiero.',
    'Bring us to your school.': 'Llévanos a tu escuela.',
    'Students teaching students': 'Estudiantes enseñando a estudiantes',
    'Peer-to-peer learning works. Our trained volunteers, including high schoolers and college students alike, speak the same language as the students we teach, and our results show it.': 'El aprendizaje entre pares funciona. Nuestros voluntarios capacitados, tanto de secundaria como universitarios, hablan el mismo idioma que los estudiantes que enseñamos, y nuestros resultados lo demuestran.',
    'See our impact.': 'Ver nuestro impacto.',
    'Why Dollar Matters': 'Por qué Dollar Matters',
    // Stats
    'Students reached': 'Estudiantes alcanzados',
    'Schools & community centers': 'Escuelas y centros comunitarios',
    'Trained volunteers': 'Voluntarios capacitados',
    'Free for all participants': 'Gratis para todos los participantes',
    // Topics
    "From budgeting basics to predatory lending, we cover what schools often don't.": 'Desde los fundamentos del presupuesto hasta los préstamos abusivos, cubrimos lo que las escuelas a menudo no enseñan.',
    'Topics we teach': 'Temas que enseñamos',
    'Saving': 'Ahorro',
    'Emergency funds, high-yield accounts, and building the habit of saving first.': 'Fondos de emergencia, cuentas de alto rendimiento y el hábito de ahorrar primero.',
    'Budgeting': 'Presupuesto',
    'The 50/30/20 rule, tracking spending, and making a plan that actually works.': 'La regla 50/30/20, el seguimiento de gastos y un plan que realmente funcione.',
    'Interest & Investing': 'Interés e Inversiones',
    'Compound interest, APR vs APY, and why starting early changes everything.': 'Interés compuesto, APR vs APY, y por qué empezar temprano cambia todo.',
    'Credit & Credit Scores': 'Crédito y Puntaje de Crédito',
    'What makes up your score, how to build credit responsibly, and what to avoid.': 'Qué compone tu puntaje, cómo construir crédito responsablemente y qué evitar.',
    'Predatory Lending': 'Préstamos Abusivos',
    'Payday loans, rent-to-own traps, and how to spot & avoid financial predators.': 'Préstamos de día de pago, trampas de alquiler con opción a compra y cómo detectar y evitar a los depredadores financieros.',
    'Taxes & Filing': 'Impuestos y Declaración',
    'W-2s, W-4s, deductions, and how to file your first return with confidence.': 'W-2, W-4, deducciones y cómo presentar tu primera declaración con confianza.',
    'View all topics': 'Ver todos los temas',
    // Footer CTAs
    'Volunteer with us': 'Voluntariado con nosotros',
    'Bring us to your school': 'Llévanos a tu escuela',
    'Contact us': 'Contáctenos',
    // Footer nav links
    'About Us': 'Sobre Nosotros',
    'Partners': 'Socios',
    'High School Workshops': 'Talleres para Secundaria',
    'Community Center Sessions': 'Sesiones en Centros Comunitarios',
    'Virtual Learning': 'Aprendizaje Virtual',
    'Apply to Volunteer': 'Solicitar ser Voluntario',
    'Training & Resources': 'Capacitación y Recursos',
    'Volunteer FAQ': 'Preguntas Frecuentes',
    'Taxes': 'Impuestos',
    'Finance Glossary': 'Glosario Financiero',
    'Budget Calculator': 'Calculadora de Presupuesto',
    'Compound Interest Calculator': 'Calculadora de Interés Compuesto',
    'Credit Score Guide': 'Guía de Puntaje de Crédito',
    'Loan Cost Estimator': 'Estimador de Costo de Préstamo',
    // Footer group titles (include the › character rendered from &rsaquo;)
    'Get Involved': 'Participa',
    'About Dollar Matters ›': 'Acerca de Dollar Matters ›',
    'Programs ›': 'Programas ›',
    'Volunteers ›': 'Voluntarios ›',
    'Financial Topics ›': 'Temas Financieros ›',
    'Resources ›': 'Recursos ›',
    // Footer social / newsletter
    'Follow Dollar Matters': 'Sigue a Dollar Matters',
    'Stay informed': 'Manténte informado',
    'Subscribe': 'Suscribirse',
    // Footer bottom
    'Privacy Policy': 'Política de Privacidad',
    'Terms of Use': 'Términos de Uso',
    'Accessibility': 'Accesibilidad',
    'Contact': 'Contacto',
    'Sitemap': 'Mapa del sitio',
    '© 2026 Dollar Matters. A student-led nonprofit. All rights reserved.': '© 2026 Dollar Matters. Una organización sin fines de lucro liderada por estudiantes. Todos los derechos reservados.',
    'Language:': 'Idioma:',
  }
};

let _langState = { lang: 'en', origNodes: null, origAttrs: null };

function applyTranslations(lang) {
  if (lang === _langState.lang) return;

  if (_langState.origNodes) {
    _langState.origNodes.forEach(function(o) { o.node.nodeValue = o.value; });
  }
  if (_langState.origAttrs) {
    _langState.origAttrs.forEach(function(o) { o.el[o.attr] = o.value; });
  }

  if (lang === 'en' || !PAGE_TRANSLATIONS[lang]) {
    _langState = { lang: 'en', origNodes: null, origAttrs: null };
    document.documentElement.lang = 'en';
    return;
  }

  const strings = PAGE_TRANSLATIONS[lang];
  const origNodes = [];
  const origAttrs = [];

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(n) {
        const p = n.parentElement;
        return (p && (p.tagName === 'SCRIPT' || p.tagName === 'STYLE'))
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  let node;
  while ((node = walker.nextNode())) {
    const orig = node.nodeValue;
    const trimmed = orig.trim();
    if (trimmed && Object.prototype.hasOwnProperty.call(strings, trimmed)) {
      origNodes.push({ node: node, value: orig });
      const i = orig.indexOf(trimmed);
      node.nodeValue = orig.slice(0, i) + strings[trimmed] + orig.slice(i + trimmed.length);
    }
  }

  const placeholderMap = {
    '#search-overlay-input': 'Buscar por palabra clave o frase',
    '#glossary-search': 'Buscar',
    '.footer-newsletter-form input[type="email"]': 'Tu dirección de correo electrónico'
  };
  Object.keys(placeholderMap).forEach(function(sel) {
    document.querySelectorAll(sel).forEach(function(el) {
      origAttrs.push({ el: el, attr: 'placeholder', value: el.placeholder });
      el.placeholder = placeholderMap[sel];
    });
  });

  _langState = { lang: lang, origNodes: origNodes, origAttrs: origAttrs };
  document.documentElement.lang = lang;
}

(function () {
  const wrap = document.getElementById('footer-lang-wrap');
  const btn = document.getElementById('footer-lang-btn');
  const text = document.getElementById('footer-lang-text');
  if (!wrap || !btn || !text) return;

  function setLang(lang) {
    applyTranslations(lang);
    localStorage.setItem('site-lang', lang);
    const opt = wrap.querySelector('.footer-lang-option[data-lang="' + lang + '"]');
    if (opt) text.textContent = opt.textContent;
    wrap.querySelectorAll('.footer-lang-option').forEach(function(o) {
      o.classList.toggle('active', o.dataset.lang === lang);
    });
    wrap.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const isOpen = wrap.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  wrap.querySelectorAll('.footer-lang-option').forEach(function(opt) {
    opt.addEventListener('click', function() { setLang(opt.dataset.lang); });
  });

  document.addEventListener('click', function(e) {
    if (!wrap.contains(e.target)) {
      wrap.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  const saved = localStorage.getItem('site-lang');
  if (saved && saved !== 'en') setLang(saved);
})();
