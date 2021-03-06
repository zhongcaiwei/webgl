
/*
Copyright (c) 2019 The Khronos Group Inc.
Use of this source code is governed by an MIT-style license that can be
found in the LICENSE.txt file.
*/


#ifdef GL_ES
precision mediump float;
#endif
varying vec4 color;
void main (void)
{
	vec4 al = color;
	float x = al.x;
	float y = al.y;
	float z = al.z;
	float w = al.w;
	vec4 m = vec4(x,y,z,w);
	gl_FragColor = m;
}
