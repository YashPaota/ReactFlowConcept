import React, { useState } from "react";
import ReactFlow ,{Background , Controls, applyNodeChanges , applyEdgeChanges} from "reactflow";
import { useCallback } from "react";
import 'reactflow/dist/style.css';


// const initialedges = [{id:"1to2" , source:"1" , target:"2"} , {id:"2to3" , source:"2" , target:"3" , type:"step"}];

// const initialnodes = [
//   {
//     id:"1",
//     position:{x:0,y:0},
//     data:{label:"Hello"},
//     type:"input",
//   },
//   {
//     id:"2",
//     position:{x:75,y:75},
//     data:{label:"Bangalore"},
//     type:"dafault",
//   },
//   {
//     id:"3",
//     data:{label:"India"},
//     position:{x:150,y:150},
//     type:"default",
//   }
// ];

// const App = () => {

//   const[nodes , setNodes] = useState(initialnodes);
//   const[edges , setEdges] = useState(initialedges);

//   const onNodesChange = useCallback(
//     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
//     []
//   );
  
  
  
//   const onEdgesChange = useCallback(
//     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
//     []
//   );
  
  
//   return(
//     <>
//       <div style={{height:"100vh" , width:"100vw"}}>
//       <ReactFlow 
//         nodes={nodes} 
//         onNodesChange={onNodesChange}
//         edges={edges}
//         onEdgesChange={onEdgesChange} >
//         <Background />
//         <Controls />
//       </ReactFlow>
//       </div>
//     </>
//   )
// }

const initialedge = [{id:"1to2" , source:"1" , target:"2"} , 
                     {id:"2to3" , source:"2" , target:"3"},
                     {id:"1to3", source:"1" , target:"3"},
                     {id:"1to4", source:"1" , target:"4"},
                     {id:"1to5", source:"1" , target:"5"},
                     {id:"1to6", source:"1" , target:"6"}];
const initialnode = [
  {
    id:"1",
    position:{x:0,y:0},
    data:{label:"Places"},
    type:"input"
  },

  {
    id:"2",
    position:{x:100,y:100},
    data:{label:"1.Benguluru"},
    type:"default",
  },
  {
    id:"3",
    position:{x:200,y:200},
    data:{label:"2.Paota"},
    type:"output",
  },
  {
    id:"4",
    position:{x:250,y:250},
    data:{label:"3.Jaipur"},
    type:"output",
  },
  {
    id:"5",
    position:{x:350,y:350},
    data:{label:"4.Hyderabad"},
    type:"output",
  },
  {
    id:"6",
    position:{x:450,y:450},
    data:{label:"5.Chandigarh"},
    type:"output",
  }
];

const App = () => {

  const[nodes , setNodes] = useState(initialnode);
  const[edges, setEdges] = useState(initialedge);


  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes , nds)),
    []
  );

      
      
      
       const onEdgesChange = useCallback(
         (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
         []
      );

      // const onConnect = useCallback(
      //   (params) => setEdges((eds) => addEdge(params , eds)),[]
      // )

  


  return(
    <div style={{height:"100vh" , width:"100vw"}}>
    <ReactFlow 
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
    >
      <Background />
      <Controls />
    </ReactFlow>
    </div>
  )
}
export default App;