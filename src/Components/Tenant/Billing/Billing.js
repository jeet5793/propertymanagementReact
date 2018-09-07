import React from 'react'

class Billing extends React.Component {
    render() {
        return (
            <div className="mainDiv" style={{borderCollapse: 'collapse', borderSpacing: 0, margin: 0, padding: 0, width: '100%', height: '100%', WebkitFontSmoothing: 'antialiased', textSizeAdjust: '100%', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%', lineHeight: '100%', backgroundColor: '#F0F0F0', color: '#000000'}}>
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
                  <tr style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, margin: 0}}>
                    <td className="content-block aligncenter" style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, verticalAlign: 'top', textAlign: 'center', margin: 0, padding: '0 0'}} align="center" valign="top"><table className="invoice" style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, textAlign: 'left', width: '80%', margin: '40px auto'}}>
                        <tbody><tr style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, margin: 0}}>
                            <td style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, verticalAlign: 'top', margin: 0, padding: '10px 0'}} valign="top">Coderthemes<br style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, margin: 0}} />
                              Invoice
                              #12345<br style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, margin: 0}} />
                              26 February 2017 </td>
                          </tr>
                          <tr style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, margin: 0}}>
                            <td style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, verticalAlign: 'top', margin: 0, padding: '10px 0'}} valign="top"><table className="invoice-items" cellPadding={0} cellSpacing={0} style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, width: '100%', margin: 0}}>
                                <tbody><tr style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, margin: 0}}>
                                    <td style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, verticalAlign: 'top', borderTopWidth: 1, borderTopColor: '#eee', borderTopStyle: 'solid', margin: 0, padding: '10px 0'}} valign="top">Regular Licence </td>
                                    <td className="alignright" style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, verticalAlign: 'top', textAlign: 'right', borderTopWidth: 1, borderTopColor: '#eee', borderTopStyle: 'solid', margin: 0, padding: '5px 0'}} align="right" valign="top">$ 13.12 </td>
                                  </tr>
                                  <tr style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, margin: 0}}>
                                    <td style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, verticalAlign: 'top', borderTopWidth: 1, borderTopColor: '#eee', borderTopStyle: 'solid', margin: 0, padding: '10px 0'}} valign="top">6 months Support </td>
                                    <td className="alignright" style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, verticalAlign: 'top', textAlign: 'right', borderTopWidth: 1, borderTopColor: '#eee', borderTopStyle: 'solid', margin: 0, padding: '10px 0'}} align="right" valign="top">$ 7.88 </td>
                                  </tr>
                                  <tr style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, margin: 0}}>
                                    <td style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, verticalAlign: 'top', borderTopWidth: 1, borderTopColor: '#eee', borderTopStyle: 'solid', margin: 0, padding: '10px 0'}} valign="top">6 months Extended Support </td>
                                    <td className="alignright" style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, verticalAlign: 'top', textAlign: 'right', borderTopWidth: 1, borderTopColor: '#eee', borderTopStyle: 'solid', margin: 0, padding: '10px 0'}} align="right" valign="top">$ 7.88 </td>
                                  </tr>
                                  <tr className="total" style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, margin: 0}}>
                                    <td className="alignright" width="80%" style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, verticalAlign: 'top', textAlign: 'right', borderTopWidth: 2, borderTopColor: '#333', borderTopStyle: 'solid', borderBottomColor: '#333', borderBottomWidth: 2, borderBottomStyle: 'solid', fontWeight: 700, margin: 0, padding: '10px 0'}} align="right" valign="top">Total </td>
                                    <td className="alignright" style={{fontFamily: '"Open Sans", sans-serif', boxSizing: 'border-box', fontSize: 15, verticalAlign: 'top', textAlign: 'right', borderTopWidth: 2, borderTopColor: '#333', borderTopStyle: 'solid', borderBottomColor: '#333', borderBottomWidth: 2, borderBottomStyle: 'solid', fontWeight: 700, margin: 0, padding: '10px 0'}} align="right" valign="top">$ 28.88 </td>
                                  </tr>
                                </tbody></table></td>
                          </tr>
                        </tbody></table></td>
                  </tr>
                  {/* LINE */}
                  {/* Set line color */}
                  <tr>    
                    <td align="center" valign="top" style={{borderCollapse: 'collapse', borderSpacing: 0, margin: 0, padding: 0, paddingLeft: '6.25%', paddingRight: '6.25%', width: '87.5%', paddingTop: 0}} className="line"><hr color="#E0E0E0" align="center" width="100%" size={1} noshade style={{margin: 0, padding: 0}} />
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

export default Billing;