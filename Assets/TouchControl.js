  private var firstpoint:Vector3; //change type on Vector3
  private var secondpoint:Vector3;
  private var xAngle: float = 0.0; //angle for axes x for rotation
  private var yAngle: float = 0.0;
  private var xAngTemp: float = 0.0; //temp variable for angle
  private var yAngTemp: float = 0.0;

  function Start() {
   //Initialization our angles of camera
   xAngle = 0.0;
   yAngle = 0.0;
   this.transform.rotation = Quaternion.Euler(yAngle, xAngle, 0.0);
  }

  function Update() {

   //Check count touches
   if(Input.touchCount > 0) {
    //Touch began, save position
    if(Input.GetTouch(0).phase == TouchPhase.Began) {
     firstpoint = Input.GetTouch(0).position;
     xAngTemp = xAngle;
     yAngTemp = yAngle;
    }

    //Move finger by screen
    if(Input.GetTouch(0).phase==TouchPhase.Moved) {
     secondpoint = Input.GetTouch(0).position;
     //Mainly, about rotate camera. For example, for Screen.width rotate on 180 degree
     xAngle = xAngTemp + (secondpoint.x - firstpoint.x) * 180.0 / Screen.width;
     yAngle = yAngTemp - (secondpoint.y - firstpoint.y) *90.0 / Screen.height;
     //Rotate camera
     this.transform.rotation = Quaternion.Euler(yAngle, xAngle, 0.0);
    }

   }
   
  }