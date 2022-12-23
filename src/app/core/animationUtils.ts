export function getStylesFromClasses(names: string | string[],

    elementType: string="div") : {[key: string]: string | number}
    
    
    {
        let elem = document.createElement(elementType);
        console.log(elem);
        
        (typeof names == "string" ? [names]:names).forEach(c => elem.classList.add(c));
        let result : any;
        for (let i =0; i < document.styleSheets.length; i++){
            let sheet = document.styleSheets[i] as CSSStyleSheet;
            
            let rules = sheet.rules || sheet.cssRules;
            console.log(rules,'rules rulesrulesrulesrules');
            for (let j =0; j< rules.length; j++){
                if(rules[j].type == CSSRule.STYLE_RULE){
                    let styleRule = rules[j] as unknown as CSSStyleSheet;
                    console.log(styleRule,'styleRules----styleRulestyleRule');
                    if ( styleRule instanceof CSSStyleRule){
                        // result = styleRule.style;
                        if (elem.matches(styleRule.selectorText)){
                            for (let k = 0; k < styleRule.style.length; k++){
                                console.log(k,'k kkkkkk');

                                result = []
                                let index: any = styleRule.style[k]
                                console.log(styleRule.style[k],result[index],styleRule.style[index] );
                                
                                result[index] = styleRule.style[index];
                            }
    
                        }
                    }
                    
                }
            }
        }

        return result;
    

    }