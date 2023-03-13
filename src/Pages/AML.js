import Typography from '@mui/material/Typography';
import { textAlign } from '@mui/system';
import Link from '@mui/material/Link';
import { useTranslation } from 'react-i18next';
const AML = () => {
    const {t} = useTranslation();
    return (
        <div>
            <Typography 
          variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat", textAlign: 'center', color: 'orange' }}>
            {t("General terms of anti-money laundering (AML) and counter-financing of terrorism (CFT)")}
            </Typography>

            <Typography 
            style={{ margin: 18, fontFamily: "Montserrat", textAlign: 'left', fontSize: '14px' }}>
                {t("BB Squid Limited (“the company” or “we”) adopts a set of anti-money laundering (AML) and counter financing of terrorists (CFT) control measures to its counterparties (“you”). You agree that you abide by the local laws in the jurisdiction of Hong Kong Special Administrative Region, including but not limited to")}
                <br/>
                {t("1. Inland Revenue Ordinance (“IRO”, Cap. 112),")}
                <br/>
{t("2. Drug Trafficking (Recovery of Proceeds) Ordinance (“DTRPO”, Cap. 405),")}
<br/>
{t("3. Organised and Serious Crimes Ordinance (“OSCO”, Cap. 455),")}
<br/>
{t("4. United Nations (Anti-Terrorism Measures) Ordinance (“UNATMO”, Cap. 575),")} 
<br/>
{t("5. Anti-Money Laundering and Counter-Terrorist Financing (Financial Institutions and Designated Non-Financial Businesses and Professions) Ordinance (“AMLO”, Cap. 615).")}
<br/>
{t("We have the right to file a suspicious transaction report (“STR”) to the Joint Financial Intelligence Unit (“JFIU”) and/or Financial Intelligence and Investigation Bureau (FIIB), by the sole discretion of the company, that under no circumstances should you be informed. ")}
            </Typography>

            <Typography 
            style={{ margin: 18, fontFamily: "Montserrat", textAlign: 'center', fontSize: '14px' }}>
                {t("The company bears zero tolerance towards money laundering and terrorist financing activities, and takes measures of prevention to combat such indictable crimes and activities. We adopt a risk-based approach to evaluate the risks and may reject your trade requests. If required by local or international law enforcement or regulatory authorities, the company would disclose your information, including but not limited to your identity, contact information, our communication records and your business activities details etc., to the related authorities, complying with local laws and ordinance in the jurisdiction of Hong Kong Special Administrative Region such as The Personal Data (Privacy) Ordinance (“PDPO”, Cap. 486). You may use our paid service to obtain your historical trading history with us.")}
            </Typography>

            <Typography 
            style={{ margin: 18, fontFamily: "Montserrat", textAlign: 'center', fontSize: '14px' }}>
                {t("All your information will be stored following the Data Protection Principles (DPP) under PDPO. The detention duration of your information is seven (7) years. Regarding restrictions on use of your personal data, by Part 6A of the PDPO, your explicit indication would be required as an informed consent before we use your personal data for direct marketing or transferring the data to a third party for direct marketing.")}
            </Typography>

            <Typography 
          variant="h6"
          style={{ margin: 18, fontFamily: "Montserrat", textAlign: 'left', color: 'orange' }}>
            {t("Words to Clients")} 
            </Typography>

            <Typography 
            style={{ margin: 18, fontFamily: "Montserrat", textAlign: 'left', fontSize: '14px' }}>
                {t("If you are one of our clients, please feel free to report to our compliance officer at compliance@bbsquid.app anytime under the following circumstances.")}<br/>
(1) {t("you believe you are a victim in any kind of scams or crimes")}<br/>
(2) {t("you suspect your bank account or crypto exchange wallet has been used illegally")}<br/>
(3) {t("you are suspicious of any crypto transactions done or to be done")}<br/>
(4) {t("you suspect your electronic devices were compromised")}<br/>
​
{t("If you doubt you that had fallen into a fraud or a scam, you should immediately report to Hong Kong Police Anti-Deception Coordination Centre (ADCC) at 18222. To maintain a healthy environment for the crypto industries to grow, it is honorable for our company to provide you useful non-legally binding opinions which may help you combat crimes and secure your digital assets. You may visit our Anti Scam Corner for more details.​ Due diligence process would be necessarily done before you complete the transactions with us at our branches to prevent any business crimes and money laundering activities. You are required to fill in our KYC form and present your identity document if you intend to conduct transactions exceeding a fiat value of 80,000 HKD.")}
​
            </Typography>

            <Typography 
          variant="h6"
          style={{ margin: 18, fontFamily: "Montserrat", textAlign: 'left', color: 'orange' }}>
            {t("Words to law enforcement authorities")}
            </Typography>

            <Typography 
            style={{ margin: 18, fontFamily: "Montserrat", textAlign: 'left', fontSize: '14px' }}>
                {t("Local or international law enforcement authorities are welcomed to co-operate and exchange information, on the basis of crimes combatting and prevention. If investigation assistance is needed, please write an email to compliance@bbsquid.app sent from the email domain of your authority organization. Please quote the trade reference number and/or crypto address explicitly.")}
            </Typography>

            <Typography 
          variant="h6"
          style={{ margin: 18, fontFamily: "Montserrat", textAlign: 'left', color: 'orange' }}>
            {t("Useful resources")}
            </Typography>

            <Typography 
            style={{ margin: 18, fontFamily: "Montserrat", textAlign: 'left', fontSize: '14px' }}>
                {t("Suspicious Transaction Report of Joint Financial Intelligence Unit:")} 
                <Link href="https://www.jfiu.gov.hk/en/str.html" target={'_blank'}>https://www.jfiu.gov.hk/en/str.html</Link><br/>

​

{t("​Latest names of persons designated as terrorists or terrorist associates by Committees of the United Nations Security Council:")} <Link href="https://www.gld.gov.hk/egazette/pdf/20202454e/egn2020245482.pdf" target={'_blank'}>https://www.gld.gov.hk/egazette/pdf/20202454e/egn2020245482.pdf</Link><br/>

{t("Updated list:")} <Link href="https://www.sb.gov.hk/chi/special/terrorist/terrorist.html" target={'_blank'}>https://www.sb.gov.hk/chi/special/terrorist/terrorist.html</Link>
<br/>

​

{t("Guideline on Compliance of AML and CFT requirements for Licensed Money Lenders")}
<Link href="https://www.cr.gov.hk/en/publications/docs/AntiMoneyGuide-e.pdf" target={'_blank'}>https://www.cr.gov.hk/en/publications/docs/AntiMoneyGuide-e.pdf</Link>
<br/>

​

{t("Hong Kong measures to combat money laundering and terrorist financing:")}
<Link href="http://www.fatf-gafi.org/media/fatf/documents/reports/mer4/MER-Hong-Kong-2019.pdf" target={'_blank'}>http://www.fatf-gafi.org/media/fatf/documents/reports/mer4/MER-Hong-Kong-2019.pdf</Link><br/>



            </Typography>
        </div>
    )
}

export default AML;