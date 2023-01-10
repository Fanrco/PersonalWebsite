const asciiart = String.raw`
                                    .   .'...                                                       
                           ..'.........  .. ......                                                  
                          .;c:..  ........  ............  ...                                       
                          .'....  .. ....   ...  ..........  ...                                    
                       ........   .  .......... .......  .. ...                                     
                      .........      .......   ...............  ...... ..                           
                    ..........  ...........      .. .......... .  ........  .                       
                    .... ...................   ... ...  ...... .   .  ....... .                     
                   .'.. ..... ..... ......  . ...       ............  .............                 
                   ......'. ...... ....... ...        .  ........ .................                 
                  .......,'  ....  ... .,..     .... .. ..........................                  
                 ........';. .   ..... ....  ... ..  .  .......  .........  ......  ....            
             ',..'........,;....';:,',''';;,,'...  ...;cclc;'...'......... ............             
           .,l:............'..',lO000KKKXNXKK0xoooddk0XXXXXK0kdodooolc:'...... ... ... ..           
            .:c'...  .....';;cdkKNWWWWNWWNNWNWWWWWWWWWWWWWWWWWNWNNNNXOxo,..... ...  ..              
             .,,.... ...  .;dOXNWNWNWWNWWWWWWWWWNNNNNWWWWWWWWNNNNWWWWWKkc,...........               
              .......... .;dKNWWNWWWWWWWWWWWWWWWWWWNWWWWWWWWWWNNNWWWWWWX0d,.  ..  ...               
                 ........'oONWNWWWWWWWWWWWWWWWWWWWNWWWWWWWWWWWNNWWNWWWWWXk,   .. ...  .             
                 ... .. .,oONWNNWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNWWWWWWWWXk;..... ...  .             
                   .... .,o0NWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWX000KOkxk0KKko,..... ...                
                   ...  .:d0Kkolcc:::cloxkKNWNNNWWWWWWWN0doc,..''... .',,,..    ..                  
                        ,odl'.  ......  ..'lkXWWWWWWNX0l. .......','........ .  .                   
                  ..   ..,'.,:coddoloolc:;;,::;:oddo:,;:::clxkOOOOO00Oxlcl:,.  ....                 
                  ..  ..';;oOKXNNNXXXKKKKXXKKOc.;oo:'lKXXXX0OOxxkOKXNWXxcodo;. ..                   
                       ..,dOKNN0xdxdc::dKNWWX0Kl,ll;lK0KNNX0Kd'',cdodKNXKOxc':;.  ,o'               
                    ..;;.;KK0X0olxK0ddxKWWWWN0KkkWMKx000KXNNWXOO0NNKO0NNWNk,,kx.  :Xx.              
                    ':d0;.OWWNXK0OKXXNWWWWWWKOxdKWNNkldONNWWWWWWWWWWNNNWWXd;lOo. .l0l               
                   .;::0k'lXWNWWWWWWWWWWWNWNOocxWWWWO::d0NWWWWWWWNNWNNWWNk:cxkl.:KNx.               
                    ,c,xWd'lNWNNWWWWWWWWNWNkc;:OWWWWk;,;cxKXNNNNWNNNNWWNx,:kkxl.oWX;                
                    .loxWNk::d0XWWWWWWNX0xool:oKWWNWXo',cllox0KXXXK0Okoc:xXKxx:,OWk.                
                     lkOWWWXOooodoooooddodkx:;xXWWWWWXd,'lkkxdodxdooddk0NWW0dc:kWK:                 
                     :OKNWWWWWWNXK0K0KXNWWKdokXWNWWNNNX0klxNWWWWWWWWWWWWNWW0d:oNWx.                 
                     .xNNWWWWWWWWNNNNNNNNWXXWKkONWNNW0lxNXOXWNNWWWWNWWWWWWN0dcOW0,                  
                      .oKWNWWWWWWWWNWWWWWNNNWN0OXWNWNOkKXO0NWWWNWWWWWWWWWWNKl,;,.                   
                        dWNNWWWWWWWWWWWWNWWXkoldKWWNN0ocoOXWWNWWWWWWWWWWWWWO:                       
                        :XWNWWWWWWWWWWWWWXOo....cOX0o;....O0KXNWNNWWWWWWWWWO;                       
                        .OWNWWWWWWWWNX0xl:;;,',cddxkxdl:,',;,odkKWWWWWWWWWW0;                       
                         cNWNWWNWWN0dc,;coxOKXXNWNNNNWWWWNXNn;,ldXWNWWWWWWWk.                       
                         .xWNWWWNWNK00KXkoloddooooooddddolodkKNX0XWWWWWWWWX:                        
                          ,0WNWWWWWWWWWN0dodxOKXXXXXXXKxooddkKNWWWWWWWWWWNd.                        
                           ;KWNWWWWWWWWWWWWNNNWWWWWWNNNNNWWWWWWWWWWWWWNWWO.                         
                            ;KWWNNWWWWWWWWWWWWWWWX0OKWWNWWNWWNWWNWWWWWNXx'                          
                             'oONWWWWWWWWWWWWWWWWKxxKWWWWWWWWWWWWWWNWWKo.                           
                               .;xXWWWWWWWWWWWWWWXOkOXWWWWWWWWWWWNNNNKl.                            
                                  ,OXXNWWWWWWWWNXXXX0KXKXWWWWWWNNWNKk:                              
                                   .lk0XNWWWWWNOONMXO0XOokXWWNNX0kdl'                               
                                     'lxOKXXKOxdkOxlcxo;:c:d0Oxxc'.                                 
                                       .;;;::lxc''..;c:;::,'::,'.                                   
                                         .....................                                      
                                             ...........,'                                         
                                                ... ...                                               `;

export {asciiart};