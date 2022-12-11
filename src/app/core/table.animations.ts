import {trigger, style, state, transition, animate, group} from "@angular/animations"
import { bindCallback } from "rxjs"
import { getStylesFromClasses } from "./animationUtils"




const commonStyles = {
    border: "black solid 4px",
    color: "white"
}

export const HighlightTrigger = trigger("rowHightlight",[


    // state("selected", style([commonStyles,{
    //     backgroundColor: "lightgreen",
    //     fontSize:"20px"
    // }])),
    
    // state("notselected", style([commonStyles,{
    //     backgroundColor: "lightsalmon",
    //     fontSize:"12px",
    //     color: "black"
    // }])),

    state("selected",style(getStylesFromClasses(["bg-success"]))),
    // state("notselected",style(getStylesFromClasses(["bg-info"]))),


    state("void", style({
        
        transform: "translateX(-50%)"
    })),

    transition("* => notselected", animate("200ms")),
    transition("* => selected", [animate("400ms 200ms ease-in",
    
                style({
                    backgroudColor: "lightblue",
                    fontSize: "25px"
                })),
                animate("250ms",style({
                    backgroudColor: "lightcoral",
                    fontSize: "30px"
                })),
                group([
                    animate("250ms", style({
                        backgroundColor: "lightcoral",
                    })),

                    animate('450ms', style({fontSize:"30px"})),
                ]),

                animate("200ms")

            ]
                
                
                
                
                ),
    transition("void => *", animate("500ms")),


])