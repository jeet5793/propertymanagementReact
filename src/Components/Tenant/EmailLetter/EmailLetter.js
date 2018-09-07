import React from 'react'

class EmailLetter extends React.Component {
    render() {
        return (
            <div  className="mainDiv"  style={{borderCollapse: 'collapse', borderSpacing: 0, margin: 0, padding: 0, width: '100%', height: '100%', WebkitFontSmoothing: 'antialiased', textSizeAdjust: '100%', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%', lineHeight: '100%', backgroundColor: '#F0F0F0', color: '#000000'}}>
                {/* SECTION / BACKGROUND */}
      {/* Set message background color one again */}
      <table width="100%" align="center" border={0} cellPadding={0} cellSpacing={0} style={{borderCollapse: 'collapse', borderSpacing: 0, margin: 0, padding: 0, width: '100%'}} className="background"><tbody><tr><td align="center" valign="top" style={{borderCollapse: 'collapse', borderSpacing: 0, margin: 0, padding: 0}} bgcolor="#F0F0F0">
              {/* WRAPPER */}
              {/* Set wrapper width (twice) */}
              {/* WRAPPER / CONTEINER */}
              {/* Set conteiner background color */}
              <table border={0} cellPadding={0} cellSpacing={0} align="center" bgcolor="#FFFFFF" width={560} style={{borderCollapse: 'collapse', borderSpacing: 0, padding: 0, width: 'inherit', maxWidth: 560}} className="container">
                {/* HEADER */}
                {/* Set text color and font family ("sans-serif" or "Georgia, serif") */}
                <tbody><tr>
                    <td align="center" valign="top" style={{borderCollapse: 'collapse', borderSpacing: 0, margin: 0, padding: 0, paddingLeft: '6.25%', paddingRight: '6.25%', width: '87.5%', fontSize: 24, fontWeight: 'bold', lineHeight: '130%', paddingTop: 25, color: '#000000', fontFamily: 'sans-serif'}} className="header">
                      <img src="assets/images/logo.png" />
                    </td>
                  </tr>
                  {/* SUBHEADER */}
                  {/* Set text color and font family ("sans-serif" or "Georgia, serif") */}
                  <tr>
                    <td align="left" valign="top" style={{borderCollapse: 'collapse', borderSpacing: 0, margin: 0, padding: 0, paddingBottom: 3, paddingLeft: '6.25%', paddingRight: '6.25%', width: '87.5%', fontSize: 18, fontWeight: 300, lineHeight: '150%', paddingTop: 15, color: '#000000', fontFamily: '"Open Sans", sans-serif'}} className="subheader">
                      Hi,
                    </td>
                  </tr>
                  {/* PARAGRAPH */}
                  {/* Set text color and font family ("sans-serif" or "Georgia, serif"). Duplicate all text styles in links, including line-height */}
                  <tr>
                    <td align="center" valign="top" style={{borderCollapse: 'collapse', borderSpacing: 0, margin: 0, padding: 0, paddingLeft: '6.25%', paddingRight: '6.25%', width: '87.5%', fontSize: 15, fontWeight: 400, lineHeight: '150%', paddingTop: 15, textAlign: 'justify', color: '#000000', fontFamily: '"Open Sans", sans-serif'}} className="paragraph">
                      &nbsp;&nbsp;&nbsp; More than 50%&nbsp;of&nbsp;total email opens occurred on&nbsp;a&nbsp;mobile device&nbsp;— a&nbsp;mobile-friendly design is&nbsp;a&nbsp;must for&nbsp;email campaigns. Tested on the most popular email clients for web, desktop and mobile. Checklist included.
                    </td>
                  </tr>
                  {/* BUTTON */}
                  {/* Set button background color at TD, link/text color at A and TD, font family ("sans-serif" or "Georgia, serif") at TD. For verification codes add "letter-spacing: 5px;". Link format: http://domain.com/?utm_source={{Campaign-Source}}&utm_medium=email&utm_content={{Button-Name}}&utm_campaign={{Campaign-Name}} */}
                  <tr>
                    <td align="center" valign="top" style={{borderCollapse: 'collapse', borderSpacing: 0, margin: 0, padding: 0, paddingLeft: '6.25%', paddingRight: '6.25%', width: '87.5%', paddingTop: 25, paddingBottom: 5}} className="button"><a target="_blank" style={{textDecoration: 'none', color: '#FFFFFF', fontFamily: '"Open Sans", sans-serif', fontSize: 17, fontWeight: 400, lineHeight: '120%', padding: '9px 26px', margin: 0, borderCollapse: 'collapse', borderSpacing: 0, borderRadius: 4, WebkitBorderRadius: 4, textAlign: '-webkit-center', verticalAlign: 'middle', backgroundColor: 'rgb(87, 187, 87)', MozBorderRadius: 4, KhtmlBorderRadius: 4}} href="#">
                        Button
                      </a>
                    </td>
                  </tr>
                  {/* LINE */}
                  {/* Set line color */}
                  <tr>    
                    <td align="center" valign="top" style={{borderCollapse: 'collapse', borderSpacing: 0, margin: 0, padding: 0, paddingLeft: '6.25%', paddingRight: '6.25%', width: '87.5%', paddingTop: 25}} className="line"><hr color="#E0E0E0" align="center" width="100%" size={1} noshade style={{margin: 0, padding: 0}} />
                    </td>
                  </tr>
                  {/* LIST */}
                  <tr>
                    <td align="center" valign="top" style={{borderCollapse: 'collapse', borderSpacing: 0, margin: 0, padding: 0, paddingLeft: '6.25%', paddingRight: '6.25%', width: '87.5%', paddingTop: 25}} className="social-icons"><table width={256} border={0} cellPadding={0} cellSpacing={0} align="center" style={{borderCollapse: 'collapse', borderSpacing: 0, padding: 0}}>
                        <tbody><tr>
                            {/* ICON 1 */}
                            <td align="center" valign="middle" style={{margin: 0, padding: 0, paddingLeft: 10, paddingRight: 10, borderCollapse: 'collapse', borderSpacing: 0}}><a target="_blank" href="#" style={{textDecoration: 'none'}}><img border={0} vspace={0} hspace={0} style={{padding: 0, margin: 0, outline: 'none', textDecoration: 'none', msInterpolationMode: 'bicubic', border: 'none', display: 'inline-block', color: '#000000'}} alt="F" title="Facebook" width={44} height={44} src="https://raw.githubusercontent.com/konsav/email-templates/master/images/social-icons/facebook.png" /></a></td>
                            {/* ICON 2 */}
                            <td align="center" valign="middle" style={{margin: 0, padding: 0, paddingLeft: 10, paddingRight: 10, borderCollapse: 'collapse', borderSpacing: 0}}><a target="_blank" href="#" style={{textDecoration: 'none'}}><img border={0} vspace={0} hspace={0} style={{padding: 0, margin: 0, outline: 'none', textDecoration: 'none', msInterpolationMode: 'bicubic', border: 'none', display: 'inline-block', color: '#000000'}} alt="T" title="Twitter" width={44} height={44} src="https://raw.githubusercontent.com/konsav/email-templates/master/images/social-icons/twitter.png" /></a></td>             
                            {/* ICON 3 */}
                            <td align="center" valign="middle" style={{margin: 0, padding: 0, paddingLeft: 10, paddingRight: 10, borderCollapse: 'collapse', borderSpacing: 0}}><a target="_blank" href="#" style={{textDecoration: 'none'}}><img border={0} vspace={0} hspace={0} style={{padding: 0, margin: 0, outline: 'none', textDecoration: 'none', msInterpolationMode: 'bicubic', border: 'none', display: 'inline-block', color: '#000000'}} alt="G" title="Google Plus" width={44} height={44} src="https://raw.githubusercontent.com/konsav/email-templates/master/images/social-icons/googleplus.png" /></a></td>      
                            {/* ICON 4 */}
                            <td align="center" valign="middle" style={{margin: 0, padding: 0, paddingLeft: 10, paddingRight: 10, borderCollapse: 'collapse', borderSpacing: 0}}><a target="_blank" href="#" style={{textDecoration: 'none'}}><img border={0} vspace={0} hspace={0} style={{padding: 0, margin: 0, outline: 'none', textDecoration: 'none', msInterpolationMode: 'bicubic', border: 'none', display: 'inline-block', color: '#000000'}} alt="I" title="Instagram" width={44} height={44} src="https://raw.githubusercontent.com/konsav/email-templates/master/images/social-icons/instagram.png" /></a></td>
                          </tr>
                        </tbody></table>
                    </td>
                  </tr>
                  {/* PARAGRAPH */}
                  <tr>
                    <td align="center" valign="top" style={{borderCollapse: 'collapse', borderSpacing: 0, margin: 0, padding: 0, paddingLeft: '6.25%', paddingRight: '6.25%', width: '87.5%', fontSize: 15, fontWeight: 400, lineHeight: '160%', paddingTop: 13, paddingBottom: 5, color: '#000000', textTransform: 'capitalize', fontFamily: '"Open Sans", sans-serif'}} className="paragraph">
                      this is an auto generated email please do not reply
                    </td>
                  </tr>
                  {/* Set text color and font family ("sans-serif" or "Georgia, serif"). Duplicate all text styles in links, including line-height */}
                  <tr>
                    <td align="center" valign="top" style={{borderCollapse: 'collapse', borderSpacing: 0, margin: 0, padding: 0, paddingLeft: '6.25%', paddingRight: '6.25%', width: '87.5%', fontSize: 17, fontWeight: 400, lineHeight: '160%', paddingTop: 5, paddingBottom: 15, color: '#000000', fontFamily: 'sans-serif'}} className="paragraph">
                      <a href="#" target="_blank" style={{color: '#57bb57', fontFamily: '"Open Sans", sans-serif', fontSize: 17, fontWeight: 400, lineHeight: '160%', textDecoration: 'underline !important'}}>www.assetswatch.com</a>
                    </td>
                  </tr>
                  {/* End of WRAPPER */}
                </tbody></table>
              {/* WRAPPER */}
              {/* Set wrapper width (twice) */}
              <table border={0} cellPadding={0} cellSpacing={0} align="center" width={560} style={{borderCollapse: 'collapse', borderSpacing: 0, padding: 0, width: 'inherit', maxWidth: 560}} className="wrapper">
                {/* SOCIAL NETWORKS */}
                {/* Image text color should be opposite to background color. Set your url, image src, alt and title. Alt text should fit the image size. Real image size should be x2 */}
                {/* FOOTER */}
                {/* Set text color and font family ("sans-serif" or "Georgia, serif"). Duplicate all text styles in links, including line-height */}
                {/* End of WRAPPER */}
              </table>
              {/* End of SECTION / BACKGROUND */}
            </td></tr></tbody></table>
            </div>
        )
    }
}  

export default EmailLetter;